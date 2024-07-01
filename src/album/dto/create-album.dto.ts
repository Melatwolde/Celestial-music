import { Genretype } from "src/album/schema/album.schema";
import { IsNotEmpty, IsString} from "class-validator"

export class createAlbumDto {
    @IsNotEmpty()
    @IsString()
    readonly album: string;
    @IsNotEmpty()
    @IsString()
    readonly title: string;
    @IsNotEmpty()
    @IsString()
    readonly artist: string;
    @IsNotEmpty()
    @IsString()
    readonly year: number;
    @IsNotEmpty()
    @IsString()
    readonly genre: Genretype;

    

    
}