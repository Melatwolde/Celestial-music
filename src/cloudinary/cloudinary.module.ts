// cloudinary.module.ts
import { Module } from '@nestjs/common';
import { CloudinaryProvider } from './cloudinary/cloudinary'; 
import { CloudinaryService } from './cloudinary.service';
import { CloudinaryController } from './cloudinary.controller';
import { AppService } from 'src/app.service';

@Module({
  providers: [CloudinaryProvider, CloudinaryService, AppService],
  exports: [CloudinaryProvider, CloudinaryService],
  controllers: [CloudinaryController]
})
export class CloudinaryModule {}
