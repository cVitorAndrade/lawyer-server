import { Injectable, NotFoundException } from '@nestjs/common';
import { DocumentModelFileRepository } from '../repositories/document-model-file.repository';

interface GetDocumentModelFileByIdRequest {
  documentModelFileId: string;
}

@Injectable()
export class GetDocumentModelFileByIdUseCase {
  constructor(
    private readonly documentModelFileRepository: DocumentModelFileRepository,
  ) {}

  async execute({ documentModelFileId }: GetDocumentModelFileByIdRequest) {
    const documentModelFile =
      await this.documentModelFileRepository.findById(documentModelFileId);
    if (!documentModelFile) throw new NotFoundException();

    return documentModelFile;
  }
}
