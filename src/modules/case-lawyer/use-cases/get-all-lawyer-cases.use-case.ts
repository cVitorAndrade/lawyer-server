import { Injectable } from '@nestjs/common';
import { CaseLawyerRepository } from '../repositories/case-lawyer.repository';

interface GetAllLawyerCasesCasesRequest {
  lawyerId: string;
}

@Injectable()
export class GetAllLawyerCasesUseCase {
  constructor(private readonly caseLawyerRepository: CaseLawyerRepository) {}

  async execute({ lawyerId }: GetAllLawyerCasesCasesRequest) {
    const lawyerCases =
      await this.caseLawyerRepository.getAllLawyerCases(lawyerId);
    return lawyerCases.filter(({ isDeleted }) => !isDeleted);
  }
}
