import { Injectable } from '@nestjs/common';
import { CaseClientRepository } from '../repositories/case-client.repository';

interface GetCasesByClientIdRequest {
  clientId: string;
}

@Injectable()
export class GetCasesByClientIdUseCase {
  constructor(private readonly caseClientRepository: CaseClientRepository) {}

  async execute({ clientId }: GetCasesByClientIdRequest) {
    const clientCases =
      await this.caseClientRepository.findAllCasesByClientId(clientId);
    return clientCases;
  }
}
