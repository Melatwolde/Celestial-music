import { PartialType } from '@nestjs/mapped-types';
import { createSongDto } from './createSong.dto';
import { IsString } from 'class-validator';


export class UpdateArtistDto extends PartialType(createSongDto) {
    @IsString()
    imageId: string;
  
    @IsString()
    songUrl: string;
}
