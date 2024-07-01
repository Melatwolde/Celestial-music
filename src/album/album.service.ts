import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Album } from 'src/album/schema/album.schema';
import { Query } from "express-serve-static-core";
import { title } from 'process';
@Injectable()
export class AlbumService {
    
    constructor(
        @InjectModel(Album.name)
        private albumModel: mongoose.Model<Album>
    ) {}

    async findall(query: Query): Promise<Album[]>{

        const resPerPage = 2
        const currentPage = Number(query.page) || 1
        const skip = resPerPage * (currentPage - 1)

        
        // console.log(query)
        const keyword = query.keyword ? { // this checks if query.keyword is true
            title:{
                $regex: query.keyword, //$regex operator in MongoDB allows to perform regular expression matching on the title field.

                $options: 'i' // This means that the search will match titles regardless of their capitalization.
            
            }
        }: {}
        const albums = await this.albumModel.find({...keyword}).limit(resPerPage).skip(skip)
        return albums
    }
    

    async create(album:  Album): Promise<Album> {
        const res = await this.albumModel.create(album);
        return res;
    }

    async findById(id: string): Promise<Album> {
        const album = await this.albumModel.findById(id);
        const IsValid = mongoose.isValidObjectId(id);
        if (!IsValid){
            throw new BadRequestException('Invalid ID');
        }
        if(!album){
            throw new NotFoundException('Album not found');
        }
        return album;
    }
3
}
