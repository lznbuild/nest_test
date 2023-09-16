/*
 * @Author: Jeffrey
 * @Date: 2023-09-16 11:50:11
 * @LastEditors: Jeffrey
 * @LastEditTime: 2023-09-16 11:52:04
 * @Description: Do not edit
 */
import { PipeTransform, Injectable, ArgumentMetadata } from '@nestjs/common';

@Injectable()
export class ValidationPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log('-===========');

    console.log(metadata, 'data_da');
    return value;
  }
}
