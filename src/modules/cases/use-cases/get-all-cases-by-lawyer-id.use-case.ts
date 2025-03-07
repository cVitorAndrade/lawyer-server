import { Injectable } from '@nestjs/common';
import { CaseRepository } from '../repositories/case.repository';

interface GetAllCasesByLawyerIdRequest {
  lawyerId: string;
}

@Injectable()
export class GetAllCasesByLawyerIdUseCase {
  constructor(private caseRepository: CaseRepository) {}

  async execute({ lawyerId }: GetAllCasesByLawyerIdRequest) {
    const cases = await this.caseRepository.getAllCasesByLawyerId(lawyerId);
    return cases;
  }
}
