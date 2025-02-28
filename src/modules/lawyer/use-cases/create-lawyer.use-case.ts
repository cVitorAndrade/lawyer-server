import { Injectable } from '@nestjs/common';
import { LawyerRepository } from '../repositories/lawyer.repository';
import { Lawyer } from '../entities/lawyer.entity';
import { hash } from 'bcrypt';

interface CreateLawyerRequest {
  name: string;
  username: string;
  email: string;
  password: string;
  avatar: string | null;
  telephone: string | null;
}

@Injectable()
export class CreateLawyerUseCase {
  constructor(private lawyerRepository: LawyerRepository) {}
  async execute(createLawyerRequest: CreateLawyerRequest) {
    const lawyer = new Lawyer({
      ...createLawyerRequest,
      password: await hash(createLawyerRequest.password, 10),
    });

    await this.lawyerRepository.create(lawyer);
    return lawyer;
  }
}
