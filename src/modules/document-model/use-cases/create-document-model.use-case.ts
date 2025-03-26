import { Injectable } from '@nestjs/common';
import { DocumentModelRepository } from '../repositories/document-model.repository';
import { DocumentModel } from '../entities/document-model.entity';

interface CreateDocumentModelRequest {
  ownerId: string;
  title: string;
  description: string | null;
  color: string;
}

@Injectable()
export class CreateDocumentModelUseCase {
  constructor(
    private readonly documentModelRepository: DocumentModelRepository,
  ) {}

  async execute(createDocumentModelRequest: CreateDocumentModelRequest) {
    const documentModel = new DocumentModel(createDocumentModelRequest);
    await this.documentModelRepository.create(documentModel);
    return documentModel;
  }
}
