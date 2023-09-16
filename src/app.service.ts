/*
 * @Author: Jeffrey
 * @Date: 2023-07-30 11:31:02
 * @LastEditors: Jeffrey
 * @LastEditTime: 2023-09-16 10:56:46
 * @Description: Do not edit
 */
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!!!';
  }
}
