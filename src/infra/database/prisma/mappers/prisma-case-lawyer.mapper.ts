import { CaseLawyers as PrismaCaseLawyer } from '@prisma/client';
import { CaseLawyer } from 'src/modules/case-lawyer/entities/case-lawyer.entity';

export class PrismaCaseLawyerMapper {
  static toPrisma({
    id,
    caseId,
    lawyerId,
    createdAt,
  }: CaseLawyer): PrismaCaseLawyer {
    return {
      id,
      caseId,
      lawyerId,
      createdAt,
    };
  }
}
