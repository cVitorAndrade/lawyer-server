import { Injectable } from '@nestjs/common';
import { DependentRepository } from '../repositories/dependent.repository';

interface GetDependentsByClientIdRequest {
  clientId: string;
}

@Injectable()
export class GetDependentsByClientIdUseCase {
  constructor(private readonly dependetRepository: DependentRepository) {}

  async execute({ clientId }: GetDependentsByClientIdRequest) {
    const dependents =
      await this.dependetRepository.findAllByClientId(clientId);
    return dependents;
  }
}
