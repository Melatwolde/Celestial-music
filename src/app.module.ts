import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AlbumModule } from './album/album.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { CloudinaryModule } from './cloudinary/cloudinary.module';
import {CloudinaryService} from './cloudinary/cloudinary.service';
import { UserModule } from './user/user.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { HomeModule } from './home/home.module';
import { SongModule } from './artist/song.module';
import { SongSchema } from './artist/song.schema';
import { FavoriteModule } from './favorite/favorite.module';
import { AboutusModule } from './aboutus/aboutus.module';
import { ContactModule } from './contact/contact.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    ServeStaticModule.forRoot(
        {
          rootPath: join(__dirname, '..', 'public'), 
          serveRoot: '/public', 
        },
        {
          rootPath: join(__dirname, '..', 'htmlandcss'), // Serving static files from the public directory
          serveRoot: '/htmlandcss', // Optional, set a virtual path prefix
        },
        {
          rootPath: join('C:', 'Users', 'j', 'Desktop', 'hakimhub icons', 'htmlandcss', 'icons'), // Serving static files from the public directory
          serveRoot: '/icons', // Optional, set a virtual path prefix
        },
        {
          rootPath: join('C:', 'Users', 'j', 'Desktop', 'hakimhub icons', 'htmlandcss', 'img'), // Serving static files from the external images directory
          serveRoot: '/img', // Set a virtual path prefix
        } ),
 
    MongooseModule.forRoot(process.env.DB_URI),
    MongooseModule.forFeature([{ name: 'Song', schema: SongSchema }]),
    AlbumModule,
    AuthModule,
    CloudinaryModule,
    UserModule,
    SongModule,
    HomeModule,
    FavoriteModule,
    AboutusModule,
    ContactModule,

  ],
  controllers: [AppController],
  providers: [AppService, CloudinaryService],
})
export class AppModule {

}
