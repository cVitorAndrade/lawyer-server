import { Lawyer } from 'src/modules/lawyer/entities/lawyer.entity';
import { CaseLawyer } from '../entities/case-lawyer.entity';

export abstract class CaseLawyerRepository {
  abstract createCaseLawyer(caseLawyer: CaseLawyer): Promise<void>;
  abstract getAllCaseLawyers(caseId: string): Promise<Lawyer[]>;
}
