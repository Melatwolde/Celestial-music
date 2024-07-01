import { Controller } from '@nestjs/common';
import {Get , Post, HttpCode, HttpStatus, Res, Body} from '@nestjs/common';
import { Response } from 'express';
import { join } from 'path';
import { CreatFavDto } from './dto/createfav.dto';
import { FavoriteService } from './favorite.service';

@Controller('favorite')
export class FavoriteController {
    FavoriteService: any;
    @Get('favorite')
    async getArtistProfile(@Res() res: Response) {
        res.sendFile(join(__dirname, '../../../public/htmlandcss', 'favorite.html'));
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    async addSong(@Body() createFavDto: CreatFavDto) {
        await this.FavoriteService.addSong(CreatFavDto);
        return { message: 'Song added successfully' };
  }
  
}
