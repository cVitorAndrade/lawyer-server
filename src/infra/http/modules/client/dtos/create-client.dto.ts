import { Type } from 'class-transformer';
import { IsDate, IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateClientDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  telephone: string;

  @IsString()
  @IsNotEmpty()
  rg: string;

  @IsString()
  @IsNotEmpty()
  cpf: string;

  @IsString()
  @IsNotEmpty()
  maritalStatus: string;

  @IsString()
  @IsNotEmpty()
  gender: string;

  @IsString()
  @IsNotEmpty()
  motherName: string;

  @IsString()
  @IsNotEmpty()
  occupation: string;

  @IsDate()
  @IsNotEmpty()
  @Type(() => Date)
  birthDate: Date;
}
