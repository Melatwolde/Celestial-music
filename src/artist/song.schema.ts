import { Schema, Document } from 'mongoose';

export const SongSchema = new Schema({
  imageId: { type: String, required: true },
  songUrl: { type: String, required: true },
});

export interface Song extends Document {
  imageId: string;
  songUrl: string;
}
