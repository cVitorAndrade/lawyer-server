import { Injectable } from '@nestjs/common';
import { CaseRepository } from '../repositories/case.repository';
import { CaseType } from '../enums/case-type.enum';
import { CasePriority } from '../enums/case-priority.enum';
import { Case } from '../entities/case.entity';
import { CaseStatus } from '../enums/case-status.enum';

interface CreateCaseRequest {
  createdById: string;
  title: string;
  description: string | null;
  type: CaseType;
  priority: CasePriority;
  status: CaseStatus;
}

@Injectable()
export class CreateCaseUseCase {
  constructor(private caseRepository: CaseRepository) {}

  async execute(createCaseRequest: CreateCaseRequest) {
    const caseEntity = new Case(createCaseRequest);
    await this.caseRepository.create(caseEntity);

    return caseEntity;
  }
}
