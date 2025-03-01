import { Injectable, UnauthorizedException } from '@nestjs/common';
import { compare } from 'bcrypt';
import { LawyerRepository } from 'src/modules/lawyer/repositories/lawyer.repository';

interface ValidateLawyerRequest {
  email: string;
  password: string;
}

@Injectable()
export class ValidateLawyerUseCase {
  constructor(private lawyerRepository: LawyerRepository) {}

  async execute({ email, password }: ValidateLawyerRequest) {
    const lawyer = await this.lawyerRepository.findByEmail(email);
    if (!lawyer) throw new UnauthorizedException('Invalid Email/Password');

    const isPasswordMatched = await compare(password, lawyer.password);
    if (!isPasswordMatched)
      throw new UnauthorizedException('Invalid Email/Password');

    return lawyer;
  }
}
