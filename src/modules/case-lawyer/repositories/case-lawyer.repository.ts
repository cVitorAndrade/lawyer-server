import { Lawyer } from 'src/modules/lawyer/entities/lawyer.entity';
import { CaseLawyer } from '../entities/case-lawyer.entity';
import { Case } from 'src/modules/cases/entities/case.entity';

export abstract class CaseLawyerRepository {
  abstract createCaseLawyer(caseLawyer: CaseLawyer): Promise<void>;
  abstract getAllCaseLawyers(caseId: string): Promise<Lawyer[]>;
  abstract getAllLawyerCases(lawyerId: string): Promise<Case[]>;
}
