import { Controller, Res } from '@nestjs/common';
import { Get } from '@nestjs/common';
import { Response } from 'express';
import { join } from 'path';

@Controller()
export class HomeController {
  @Get('/home')
  getHomePage(@Res() res: Response) {
    const filePath = join(__dirname, '..', '..', 'public', 'htmlandcss', 'home.html');
    res.sendFile(filePath);
  }
}
