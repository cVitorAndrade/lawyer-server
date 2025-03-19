import { CaseClient } from '../entities/case-client.entity';

export abstract class CaseClientRepository {
  abstract create(caseClient: CaseClient): Promise<void>;
}
