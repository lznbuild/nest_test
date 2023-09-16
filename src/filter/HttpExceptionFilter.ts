/*
 * @Author: Jeffrey
 * @Date: 2023-09-16 11:37:34
 * @LastEditors: Jeffrey
 * @LastEditTime: 2023-09-16 11:39:10
 * @Description: Do not edit
 */
import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    console.log('--------------');

    console.log(host, 'host');
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();

    response.status(status).json({
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
    });
  }
}
