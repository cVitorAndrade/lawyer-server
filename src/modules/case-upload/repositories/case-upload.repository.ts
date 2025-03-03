import { CaseUpload } from '../entities/case-upload.entity';

export abstract class CaseUploadRepository {
  abstract create(caseUpload: CaseUpload): Promise<void>;
}
