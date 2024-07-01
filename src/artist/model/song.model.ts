
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Song extends Document {
  @Prop()
  name: string;

  // other properties
}

export const SongSchema = SchemaFactory.createForClass(Song);