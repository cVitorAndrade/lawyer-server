import { Injectable, NotFoundException } from '@nestjs/common';
import { CaseRepository } from '../repositories/case.repository';

interface GetCaseByIdRequest {
  caseId: string;
}

@Injectable()
export class GetCaseByIdUseCase {
  constructor(private readonly caseRepository: CaseRepository) {}

  async execute({ caseId }: GetCaseByIdRequest) {
    const caseEntity = await this.caseRepository.getCaseById(caseId);
    if (!caseEntity) throw new NotFoundException();

    return caseEntity;
  }
}
