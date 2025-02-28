import { IsEmail, IsNotEmpty, IsString, Matches } from 'class-validator';

export class CreateLawyerDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  @Matches(/^\S*$/, { message: 'Username should not contain spaces' })
  username: string;

  @IsEmail()
  @IsNotEmpty()
  @IsString()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  avatar: string;

  telephone: string;
}
