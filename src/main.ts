/*
 * @Author: Jeffrey
 * @Date: 2023-07-30 11:31:02
 * @LastEditors: Jeffrey
 * @LastEditTime: 2023-09-16 11:42:12
 * @Description: Do not edit
 */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets(join(__dirname, '..', 'public'), { prefix: '/static' });
  // 全局范围内的过滤器
  // app.useGlobalFilters(new HttpExceptionFilter());
  await app.listen(3000);
}
bootstrap();
