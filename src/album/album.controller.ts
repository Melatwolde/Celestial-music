import { Body, Controller, Get, InternalServerErrorException, Param, Post, Query, Res } from '@nestjs/common';
import { AlbumService } from './album.service';
import { Album } from 'src/album/schema/album.schema';
import { createAlbumDto } from './dto/create-album.dto';
import { Response } from 'express';
import { join } from 'path';


@Controller('album')
export class AlbumController {
    constructor(private albumService: AlbumService) {}

    @Get()
    async getallAlbums(@Query() query: any): Promise<Album[]> {
    try {
        return await this.albumService.findall(query);
    } catch (error) {
        console.error('Failed to get all albums:', error);
        throw new InternalServerErrorException('Failed to get all albums');
    }
}
    @Post()
    async createAlbum(
    @Body() createAlbumDto: Album
    ): Promise<Album> {
    return this.albumService.create(createAlbumDto);
    }

    @Get('/album.html')
    getHomePage(@Res() res: Response) {
      const filePath = join(__dirname, '..', '..', 'public', 'htmlandcss', 'album.html');
      res.sendFile(filePath);
    }

    @Get('/Genere.html')
    getGenerePage(@Res() res: Response) {
      const filePath = join(__dirname, '..', '..', 'public', 'htmlandcss', 'Genere.html');
      res.sendFile(filePath);
    }
}