import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateDocumentModelDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsOptional()
  description: string | null;

  @IsString()
  @IsNotEmpty()
  color: string;
}
