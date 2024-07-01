import { Controller } from '@nestjs/common';
import { Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { join } from 'path';

@Controller('contact')
export class ContactController {
    @Get('/contact.html')
    getHomePage(@Res() res: Response) {
      const filePath = join(__dirname, '..', '..', 'public', 'htmlandcss', 'contact.html');
      res.sendFile(filePath);
    }
}
