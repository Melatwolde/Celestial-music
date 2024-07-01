import { Module } from '@nestjs/common';
import { AlbumController } from './album.controller';
import { AlbumService } from './album.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Album, AlbumSchema } from 'src/album/schema/album.schema';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AuthService } from 'src/auth/auth.service';
import { User } from 'src/auth/schemas/user.schema';
// import { AlbumModel } from ''; // Import the missing AlbumModel class

@Module({
  imports: [
    ServeStaticModule.forRoot({
      // Specify the root path to the 'music' directory
      rootPath: join(__dirname, '..', 'music'),
      // Specify the URL prefix for accessing the static files
      serveRoot: '/music/',
    }),
    MongooseModule.forFeature([{ name: 'Album', schema: AlbumSchema }])
  ],
  controllers: [AlbumController],
  providers: [AlbumService],
})
export class AlbumModule {}
@Module({
  imports: [AlbumModule],
  providers: [AuthService,Album],
})

export class AppModule {}