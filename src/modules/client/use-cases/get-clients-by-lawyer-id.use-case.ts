import { Injectable } from '@nestjs/common';
import { ClientRepository } from '../repositories/client.repository';

interface GetClientsByLawyerIdRequest {
  lawyerId: string;
}

@Injectable()
export class GetClientsByLawyerIdUseCase {
  constructor(private readonly clientRepository: ClientRepository) {}

  async execute({ lawyerId }: GetClientsByLawyerIdRequest) {
    const clients = await this.clientRepository.findAllByLawyerId(lawyerId);
    return clients;
  }
}
