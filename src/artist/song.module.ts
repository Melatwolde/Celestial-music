import { Module } from '@nestjs/common';
import {  SongService } from './song.service';
import { SongsController } from './song.controller';
import { SongSchema } from './song.schema';
import { Song } from './model/song.model';
import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [
    MongooseModule.forFeature([{ name: Song.name, schema: SongSchema }])
  ],
  controllers: [SongsController],
  providers: [SongService],
})
export class SongModule {}
