import { Injectable } from '@nestjs/common';
import { CaseLawyerRepository } from '../repositories/case-lawyer.repository';
import { CaseLawyer } from '../entities/case-lawyer.entity';

interface CreateCaseLawyerRequest {
  lawyerId: string;
  caseId: string;
}

@Injectable()
export class CreateCaseLawyerUseCase {
  constructor(private caseLawyerRepository: CaseLawyerRepository) {}

  async execute(createCaseLawyerRequest: CreateCaseLawyerRequest) {
    const caseLawyer = new CaseLawyer(createCaseLawyerRequest);
    await this.caseLawyerRepository.createCaseLawyer(caseLawyer);
    return caseLawyer;
  }
}
