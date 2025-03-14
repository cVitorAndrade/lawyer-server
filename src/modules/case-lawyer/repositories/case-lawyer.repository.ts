import { CaseLawyer } from '../entities/case-lawyer.entity';

export abstract class CaseLawyerRepository {
  abstract createCaseLawyer(caseLawyer: CaseLawyer): Promise<void>;
}
