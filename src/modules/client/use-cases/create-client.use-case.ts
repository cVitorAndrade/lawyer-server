import { Injectable } from '@nestjs/common';
import { ClientRepository } from '../repositories/client.repository';
import { Client } from '../entities/client.entity';

interface CreateClientRequest {
  name: string;
  email: string;
  telephone: string;
  birthDate: Date;
}

@Injectable()
export class CreateClientUseCase {
  constructor(private readonly clientRepository: ClientRepository) {}

  async execute(createClientRequest: CreateClientRequest) {
    const client = new Client(createClientRequest);
    await this.clientRepository.create(client);
    return client;
  }
}
