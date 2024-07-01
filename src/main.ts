import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { join } from 'path'; 
import { ExpressAdapter } from '@nestjs/platform-express';
import * as express from 'express';

async function bootstrap() {
  const server = express();

  // Serve static files from the public directory
  server.use(express.static(join(__dirname, '..', 'public')));
  
  // Create NestJS application with Express adapter
  const app = await NestFactory.create(AppModule, new ExpressAdapter(server));
  app.useGlobalPipes(new ValidationPipe());
  app.use('/htmlandcss/auth', express.static(join(__dirname, '..', 'htmlandcss', 'auth')));
  app.use('/htmlandcss/icon', express.static(join(__dirname, '..', 'htmlandcss', 'icon')));
  
  await app.listen(3338);
  console.log(`Application is running on: http://localhost:3338`);
}

bootstrap();
