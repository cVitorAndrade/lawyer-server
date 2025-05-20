import { Injectable } from '@nestjs/common';
import { ClientFile } from '../entities/client-file.entity';
import { ClientFileRepository } from '../repositories/client-file.repository';

interface CreateClientFileRequest {
  clientId: string;
  uploadedById: string;
  path: string;
  fullpath: string;
  mimetype: string;
  size: number;
  originalname: string;
}

@Injectable()
export class CreateClientFileUseCase {
  constructor(private readonly clientFileRepository: ClientFileRepository) {}

  async execute(createClientFileRequest: CreateClientFileRequest) {
    const clientFile = new ClientFile(createClientFileRequest);
    await this.clientFileRepository.create(clientFile);
    return clientFile;
  }
}
