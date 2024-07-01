import { Controller, Get, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { AppService } from '../app.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { CloudinaryService } from './cloudinary.service';
import { Express } from 'express'; // Import Express

@Controller('cloudinary')
export class CloudinaryController {
    constructor(private readonly appService: AppService, private readonly cloudinaryService: CloudinaryService) {}

    @Get()
    getCloudinary(): string {
        return this.appService.getCloudinary();
    }

    @Post('upload')
    @UseInterceptors(FileInterceptor('file'))
    async uploadFile(@UploadedFile() file: Express.Multer.File) { // Changed File to file and made the method async
        return this.cloudinaryService.uploadFile(file);
    }
}