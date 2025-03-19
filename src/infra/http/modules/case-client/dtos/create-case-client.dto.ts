import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCaseClientDto {
  @IsString()
  @IsNotEmpty()
  caseId: string;

  @IsString()
  @IsNotEmpty()
  clientId: string;
}
