import { CaseClients as PrismaCaseClient } from '@prisma/client';
import { CaseClient } from 'src/modules/case-client/entities/case-client.entity';

export class PrismaCaseClientMapper {
  static toPrisma({
    id,
    caseId,
    clientId,
    createdAt,
  }: CaseClient): PrismaCaseClient {
    return {
      id,
      caseId,
      clientId,
      createdAt,
    };
  }
}
