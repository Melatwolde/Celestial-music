import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class LoginDto {
    @IsNotEmpty({ message: "Please enter an email" })
    @IsEmail({}, { message: "Please enter a correct email" })
    readonly email: string;
    
    @IsString({ message: "Password must be a string" })
    @IsNotEmpty({ message: "Password cannot be empty" })
    @MinLength(8, { message: "Password must be at least 8 characters long" })
    readonly password: string;
}