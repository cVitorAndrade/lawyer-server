import { Case } from '../entities/case.entity';

export abstract class CaseRepository {
  abstract create(caseEntity: Case): Promise<void>;
}
