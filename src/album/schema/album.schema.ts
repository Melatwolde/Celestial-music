import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export enum Genretype {
    ROCK = 'Rock',
    POP = 'Pop',
    JAZZ = 'Jazz',
    CLASSICAL = 'Classical',
}

@Schema({ timestamps: true })
export class Album extends Document {
    @Prop()
    title: string;

    @Prop()
    artist: string;

    @Prop()
    year: number;

    @Prop({ enum: Genretype })
    genre: Genretype;

    @Prop()
    cover: string;

    @Prop()
    tracks: string[];
}

export const AlbumSchema = SchemaFactory.createForClass(Album);
