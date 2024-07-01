import { Mongoose } from 'mongoose';
import { SongSchema } from '../song.schema';
import dotenv from 'dotenv';
import { run } from 'node:test';
import express from 'express';

dotenv.config();
const port = process.env.PORT || 3000;

const mongoose = new Mongoose();
mongoose.connect(process.env.DB_URI).then(() => {
  console.log('Connected to the database');
}).catch((error) => {
  console.error('Connection error:', error);
  process.exit(1);
});

const Song = mongoose.model('Song', SongSchema);

const songs = [
  { imageId: 'image-18-icon', songUrl: 'https://res.cloudinary.com/dhflgszgo/audio/upload/v1/52ee4ae6e0f12607a9714ac6b50f833' },
  { imageId: 'image-17-icon', songUrl: 'https://res.cloudinary.com/dhflgszgo/audio/upload/v1/52ee4ae6e0f12607a97qwiheqwur' },
];

async function addSongs() {
  try {
    for (const song of songs) {
      const newSong = new Song(song);
      await newSong.save();
      console.log(`Added song for ${song.imageId}`);
    }
    console.log('All songs added successfully');
  } catch (error) {
    console.error('Error adding songs:', error);
  } finally {
    mongoose.connection.close(true);
  }
}

const app = express();

app.get('/addsongs', async (req, res) => {
    const result = await addSongs();
    res.send(result);
  });
  

run();