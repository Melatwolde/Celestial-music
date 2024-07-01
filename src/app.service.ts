import { Injectable } from '@nestjs/common';
import { Multer } from 'multer';
import { Express } from 'express';
import { File } from 'buffer';
@Injectable()
export class AppService {
  getCloudinary(): string {
      throw new Error('Method not implemented.');
  }
  uploadFile(file: Express.Multer.File) {
    throw new Error('Method not implemented.');
  }
  getHello(): string {
    return 'Hello World!';
  }
}
