/*
 * @Author: Jeffrey
 * @Date: 2023-07-30 12:32:25
 * @LastEditors: Jeffrey
 * @LastEditTime: 2023-09-16 11:40:59
 * @Description: Do not edit
 */
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  Ip,
  HttpException,
  HttpStatus,
  UseFilters,
  ForbiddenException,
} from '@nestjs/common';
import { PersonService } from './person.service';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import { HttpExceptionFilter } from 'src/filter/HttpExceptionFilter';

@Controller('person')
export class PersonController {
  constructor(private readonly personService: PersonService) {}

  // rest api
  @Post()
  create(@Body() createPersonDto: CreatePersonDto) {
    return this.personService.create(createPersonDto);
  }

  // findAll 和 findOneByQuery有优先级的概念，上面优先匹配。
  @Get()
  findAll() {
    throw new HttpException(
      {
        status: HttpStatus.FORBIDDEN,
        error: 'This is a custom message',
      },
      HttpStatus.FORBIDDEN,
    );
    // return this.personService.findAll();
  }

  @Get('/error')
  @UseFilters(HttpExceptionFilter)
  createError() {
    throw new ForbiddenException();
  }

  // /person?name=xx
  @Get()
  findOneByQuery(@Ip() ip: string, @Query('name') name: string) {
    return `query get name ${name}-${ip}`;
  }

  // /person/111
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.personService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePersonDto: UpdatePersonDto) {
    return this.personService.update(+id, updatePersonDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.personService.remove(+id);
  }
}
