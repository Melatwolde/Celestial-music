import { Body, Controller, Get, HttpStatus, Param, Post, HttpCode, Res } from '@nestjs/common';
import { SongService } from './song.service';
import { createSongDto } from './dto/createSong.dto';
import { Response } from 'express';
import { isValidObjectId } from 'mongoose';
import { join } from 'path';

@Controller('songs')
export class SongsController {
  constructor(private readonly songsService: SongService) {}

  @Get(':id')
  async getSong(@Param('id') id: string, @Res() res: Response) {
    // Check if the ID is a valid ObjectId
    if (!isValidObjectId(id)) {
      return res.status(HttpStatus.BAD_REQUEST).json({
        statusCode: HttpStatus.BAD_REQUEST,
        message: 'Invalid ID format',
      });
    }

    try {
      const song = await this.songsService.getSongById(id);
      if (song) {
        return res.status(HttpStatus.OK).json(song);
      } else {
        return res.status(HttpStatus.NOT_FOUND).json({
          statusCode: HttpStatus.NOT_FOUND,
          message: 'Song not found',
        });
      }
    } catch (error) {
      console.error('Error fetching song:', error);
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: 'Internal server error',
      });
    }
  }
  @Get('artistprofile')
  async getArtistProfile(@Res() res: Response) {
    res.sendFile(join(__dirname, '../../../public/htmlandcss', 'artistprofile.html'));
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async addSong(@Body() createSongDto: createSongDto) {
    await this.songsService.addSong(createSongDto);
    return { message: 'Song added successfully' };
  }
  
}
