import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class SignInDto {
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}
