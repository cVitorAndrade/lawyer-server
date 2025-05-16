import { Injectable } from '@nestjs/common';
import { DependentRepository } from '../repositories/dependent.repository';
import { Dependent } from '../entities/dependent.entity';

interface CreateDependentRequest {
  clientId: string;
  name: string;
  email: string;
  telephone: string;
  rg: string;
  cpf: string;
  motherName: string;
  maritalStatus: string;
  gender: string;
  occupation: string;
  birthDate: Date;
}

@Injectable()
export class CreateDependentUseCase {
  constructor(private readonly dependentRepository: DependentRepository) {}

  async execute(createDependentRequest: CreateDependentRequest) {
    const dependent = new Dependent(createDependentRequest);
    await this.dependentRepository.create(dependent);
    return dependent;
  }
}
