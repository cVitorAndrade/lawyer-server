import { Injectable } from '@nestjs/common';
import { CaseRepository } from '../repositories/case.repository';

@Injectable()
export class GetAllCasesUseCase {
  constructor(private readonly caseRepository: CaseRepository) {}

  async execute() {
    const cases = await this.caseRepository.getAllCases();
    return cases;
  }
}
