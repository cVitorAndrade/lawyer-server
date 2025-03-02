import { Injectable, NotFoundException } from '@nestjs/common';
import { LawyerRepository } from '../repositories/lawyer.repository';

interface GetLawyerByIdRequest {
  lawyerId: string;
}

@Injectable()
export class GetLawyerByIdUseCase {
  constructor(private lawyerRepository: LawyerRepository) {}

  async execute({ lawyerId }: GetLawyerByIdRequest) {
    const lawyer = this.lawyerRepository.findById(lawyerId);
    if (!lawyer) throw new NotFoundException('User not found');

    return lawyer;
  }
}
