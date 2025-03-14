import { CaseLawyer } from 'src/modules/case-lawyer/entities/case-lawyer.entity';

export class CaseLawyerViewModel {
  static toHttp({ id, caseId, lawyerId, createdAt }: CaseLawyer) {
    return { id, caseId, lawyerId, createdAt };
  }
}
