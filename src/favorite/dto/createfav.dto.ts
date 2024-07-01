import { IsString } from "class-validator";

export class CreatFavDto {
    @IsString()
    imageId: string;
  
    @IsString()
    songUrl: string;
}
