import { IsArray, IsNotEmpty, IsString } from 'class-validator';
import { Lawyer } from 'src/modules/lawyer/entities/lawyer.entity';

export class CreateInviteDto {
  @IsString()
  @IsNotEmpty()
  caseId: string;

  @IsArray()
  @IsNotEmpty()
  lawyers: Lawyer[];
}
