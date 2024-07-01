import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { SignUpDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';
import { User } from './schemas/user.schema';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    private jwtService: JwtService,
  ) {}

  async hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, 10);
  }

  async signUp(signUpDto: SignUpDto): Promise<{ token: string }> {
    const { email, password } = signUpDto;

    const userExist = await this.userModel.findOne({ email });
    if (userExist) {
      throw new UnauthorizedException('User already exists');
    }

    const hashedPassword = await this.hashPassword(password);

    const newUser = await this.userModel.create({
      email,
      password: hashedPassword,
    });

    const token = this.jwtService.sign({ id: newUser._id });

    return { token };
  }

  async login(loginDto: LoginDto): Promise<{ message: string; token: string }> {
    const user = await this.userModel.findOne({ email: loginDto.email });
    if (!user) {
      throw new UnauthorizedException("User does not exist.");
    }

    const passwordMatches = await bcrypt.compare(loginDto.password, user.password);
    if (!passwordMatches) {
      throw new UnauthorizedException("Invalid credentials.");
    }

    const token = this.jwtService.sign({ id: user._id });
    return { message: "Login successful", token };
  }
}