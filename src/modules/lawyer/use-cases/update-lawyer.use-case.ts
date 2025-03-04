import { Injectable } from '@nestjs/common';
import { LawyerRepository } from '../repositories/lawyer.repository';

interface UpdateLawyerRequest {
  lawyerId: string;
  name?: string;
  email?: string;
  username?: string;
  telephone?: string;
  password?: string;
  avatar?: string;
}

@Injectable()
export class UpdateLawyerUseCase {
  constructor(private lawyerRepository: LawyerRepository) {}

  async execute({
    lawyerId,
    avatar,
    email,
    name,
    password,
    telephone,
    username,
  }: UpdateLawyerRequest) {
    const lawyer = await this.lawyerRepository.findById(lawyerId);
    if (!lawyer) throw new Error('Lawyer not found');

    lawyer.email = email ?? lawyer.email;
    lawyer.name = name ?? lawyer.name;
    lawyer.username = username ?? lawyer.username;
    lawyer.password = password ?? lawyer.password;
    lawyer.avatar = avatar !== undefined ? avatar : lawyer.avatar;
    lawyer.telephone = telephone !== undefined ? telephone : lawyer.telephone;

    await this.lawyerRepository.update(lawyer);
    return lawyer;
  }
}
