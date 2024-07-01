import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { join } from 'path';

@Controller('about')
export class AboutusController {
    @Get()
    @Get('about')
    async getArtistProfile(@Res() res: Response) {
        res.sendFile(join(__dirname, '../../../public/htmlandcss', 'about.html'));
    }

}
