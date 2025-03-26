import { DocumentModelFile } from '../entities/document-model-file.entity';
import { DocumentModelFileRepository } from '../repositories/document-model-file.repository';
import { Injectable } from '@nestjs/common';

interface CreateDocumentModelFileRequest {
  documentModelId: string;
  uploadedById: string;
  path: string;
  fullpath: string;
  mimetype: string;
  originalname: string;
  size: number;
}

@Injectable()
export class CreateDocumentModelFileUseCase {
  constructor(
    private readonly documentModelFileRepository: DocumentModelFileRepository,
  ) {}

  async execute(
    createDocumentModelFileRequest: CreateDocumentModelFileRequest,
  ) {
    const documentModelFile = new DocumentModelFile(
      createDocumentModelFileRequest,
    );
    await this.documentModelFileRepository.create(documentModelFile);
    return documentModelFile;
  }
}
