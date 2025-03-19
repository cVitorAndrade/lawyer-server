import { CaseClient } from 'src/modules/case-client/entities/case-client.entity';

export class CaseClienViewModel {
  static toHttp({ id, caseId, clientId, createdAt }: CaseClient) {
    return {
      id,
      caseId,
      clientId,
      createdAt,
    };
  }
}
