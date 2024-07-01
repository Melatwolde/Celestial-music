import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { createSongDto } from './dto/createSong.dto';
import { Song ,SongDocument } from './schema/song.schema';



@Injectable()
export class SongService {
  constructor(@InjectModel(Song.name) private songModel: Model<SongDocument>) {}

  async getSongById(id: string): Promise<Song | null> {
    try {
      return await this.songModel.findById(id).exec();
    } catch (error) {
      console.error('Error in getSongById:', error);
      throw new Error('Error fetching song by ID');
    }
  }

  async addSong(createSongDto: createSongDto): Promise<Song> {
    const newSong = new this.songModel(createSongDto);
    return newSong.save();
  }
}