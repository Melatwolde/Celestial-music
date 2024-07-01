import { IsString } from "class-validator";

export class createSongDto {
    @IsString()
    imageId: string;
  
    @IsString()
    songUrl: string;
}
