import { Injectable } from '@nestjs/common';
import { CaseLawyerRepository } from '../repositories/case-lawyer.repository';

interface GetAllCaseLawyersRequest {
  caseId: string;
}

@Injectable()
export class GetAllCaseLawyersUseCase {
  constructor(private readonly caseLawyerRepository: CaseLawyerRepository) {}

  async execute({ caseId }: GetAllCaseLawyersRequest) {
    const caseLawyers =
      await this.caseLawyerRepository.getAllCaseLawyers(caseId);
    return caseLawyers;
  }
}
