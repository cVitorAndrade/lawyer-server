import { Injectable } from '@nestjs/common';
import { LawyerRepository } from '../repositories/lawyer.repository';

@Injectable()
export class GetAllLawyersUseCase {
  constructor(private lawyerRepository: LawyerRepository) {}

  async execute() {
    const lawyers = await this.lawyerRepository.getAllLawyers();
    return lawyers;
  }
}
