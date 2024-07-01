import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';


export type SongDocument = Song & Document;

@Schema()
export class Song {
  @Prop({ required: true })
  imageId: string;

  @Prop({ required: true })
  songUrl: string;
}

export const SongSchema = SchemaFactory.createForClass(Song);