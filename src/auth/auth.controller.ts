import { Body, Controller, Post, Get, Res, Query, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';
import { join } from 'path';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  async signUp(@Body() signUpDto: SignUpDto): Promise<{ token: string }> {
    console.log('Received signup data:', signUpDto);
    const result = await this.authService.signUp(signUpDto);
    console.log('Signup result:', result);
    return result;
  }

  @Get('/signup/page')
  getSignUpPage(@Res() res: Response) {
    const filePath = join(__dirname, '../../public/htmlandcss/auth/signup.html');
    console.log(filePath);
    res.sendFile(filePath);
  }

  @Post('/login')
  async login(@Body() loginDto: LoginDto, @Res() res: Response): Promise<void> {
    try {
      console.log('Received login data:', loginDto);
      const result = await this.authService.login(loginDto);
      console.log('Login result:', result);
      res.status(200).json(result);
    } catch (error) {
      console.error('Login error:', error);
      res.status(401).json({ message: error.message });
    }
  }

  @Get('/login/page')
  getLoginPage(@Res() res: Response) {
    const filePath = join(__dirname, '../../public/htmlandcss/auth/log.html');
    console.log(filePath);
    res.sendFile(filePath);
  }

  @Get('/login/check')
async checkUser(@Query() query: LoginDto, @Res() res: Response): Promise<void> {
  try {
    const result = await this.authService.login(query);
    res.redirect('http://localhost:3338/auth/login/home.html');
  } catch (error) {
    if (error instanceof UnauthorizedException) {
      res.status(401).send('An account doesn\'t exist or invalid credentials.');
    } else {
      console.error('Login check error:', error);
      res.status(500).send('Internal server error.');
    }
  }
 }
}