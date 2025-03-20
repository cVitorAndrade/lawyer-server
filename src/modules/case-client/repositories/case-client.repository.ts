import { Client } from 'src/modules/client/entities/client.entity';
import { CaseClient } from '../entities/case-client.entity';

export abstract class CaseClientRepository {
  abstract create(caseClient: CaseClient): Promise<void>;
  abstract getAllCaseClients(caseId: string): Promise<Client[]>;
}
