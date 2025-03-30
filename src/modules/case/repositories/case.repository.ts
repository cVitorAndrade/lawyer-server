import { Case } from '../entities/case.entity';

export abstract class CaseRepository {
  abstract create(caseEntity: Case): Promise<void>;
  abstract getAllCases(): Promise<Case[]>;
  abstract getAllCasesByLawyerId(lawyerId: string): Promise<Case[]>;
  abstract getCaseById(id: string): Promise<Case | null>;
  abstract delete(id: string): Promise<void>;
}
