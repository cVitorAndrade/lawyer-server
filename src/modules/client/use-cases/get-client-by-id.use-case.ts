import { Injectable, NotFoundException } from '@nestjs/common';
import { ClientRepository } from '../repositories/client.repository';

interface GetClientByIdRequest {
  clientId: string;
}

@Injectable()
export class GetClientByIdUseCase {
  constructor(private readonly clientRepository: ClientRepository) {}

  async execute({ clientId }: GetClientByIdRequest) {
    const client = await this.clientRepository.findById(clientId);
    if (!client) throw new NotFoundException();
    return client;
  }
}
