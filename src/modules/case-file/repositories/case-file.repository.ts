import { CaseFile } from '../entities/case-file.entity';

export abstract class CaseFileRepository {
  abstract create(caseFile: CaseFile): Promise<void>;
  abstract getAllCaseFiles(caseId: string): Promise<CaseFile[]>;
  abstract getCaseFileById(id: string): Promise<CaseFile | null>;
  abstract delete(id: string): Promise<void>;
}
