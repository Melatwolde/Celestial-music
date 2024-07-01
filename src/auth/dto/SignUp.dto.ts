import { IsEmail, IsEnum, IsNumber, IsNotEmpty, IsString, MIN_LENGTH, minLength} from "class-validator"

export class SignUpDto{
    // @IsString() 
    // @IsNotEmpty()
    // readonly name: string;
    @IsNotEmpty({message: "please enter correct email"})
    @IsEmail()
    readonly email: string;
    
    @IsString() 
    @IsNotEmpty()
    
    readonly password: string;
    
}