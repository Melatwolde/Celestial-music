import { Controller, Get, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { AppService } from './app.service';

import { Express } from 'express';
import { CloudinaryService } from './cloudinary/cloudinary.service';
@Controller('music')
export class MusicController {
  constructor(private readonly cloudinaryService: CloudinaryService) {}
  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  uploadImage(@UploadedFile() file: Express.Multer.File) {
    return this.cloudinaryService.uploadFile(file);
  }
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    return this.appService.uploadFile(file);
  }
}