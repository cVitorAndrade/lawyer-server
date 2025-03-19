import { Injectable } from '@nestjs/common';
import { CaseClientRepository } from '../repositories/case-client.repository';
import { CaseClient } from '../entities/case-client.entity';

interface CreateCaseClientRequest {
  clientId: string;
  caseId: string;
}

@Injectable()
export class CreateCaseClientUseCase {
  constructor(private readonly caseClientRepository: CaseClientRepository) {}

  async execute(createCaseClientRequest: CreateCaseClientRequest) {
    const caseClient = new CaseClient(createCaseClientRequest);
    await this.caseClientRepository.create(caseClient);
    return caseClient;
  }
}
