import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { CasePriority } from 'src/modules/case/enums/case-priority.enum';
import { CaseStatus } from 'src/modules/case/enums/case-status.enum';
import { CaseType } from 'src/modules/case/enums/case-type.enum';

export class CreateCaseDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsNotEmpty()
  @IsEnum(CaseType)
  type: CaseType;

  @IsNotEmpty()
  @IsEnum(CasePriority)
  priority: CasePriority;

  @IsNotEmpty()
  @IsEnum(CaseStatus)
  status: CaseStatus;
}
