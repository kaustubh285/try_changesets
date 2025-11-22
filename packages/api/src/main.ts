import { NestFactory } from '@nestjs/core';
import type { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  console.log('Starting API server...');
  await app.listen(process.env.PORT || 3000);


  console.log(`API server is running on: http://localhost:${await app.getUrl()}`);
}
bootstrap();
