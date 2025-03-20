import { Injectable } from '@nestjs/common';
import { CaseClientRepository } from 'src/modules/case-client/repositories/case-client.repository';

interface GetAllCaseClientsRequest {
  caseId: string;
}

@Injectable()
export class GetAllCaseClientsUseCase {
  constructor(private readonly caseClientRepository: CaseClientRepository) {}

  async execute({ caseId }: GetAllCaseClientsRequest) {
    const caseClients =
      await this.caseClientRepository.getAllCaseClients(caseId);
    return caseClients;
  }
}
