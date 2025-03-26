import { Injectable } from '@nestjs/common';
import { DocumentModelFileRepository } from '../repositories/document-model-file.repository';

interface GetDocumentModelFilesRequest {
  documentModelId: string;
}

@Injectable()
export class GetDocumentModelFilesUseCase {
  constructor(
    private readonly documentModelFileRepository: DocumentModelFileRepository,
  ) {}

  async execute({ documentModelId }: GetDocumentModelFilesRequest) {
    const documentModelFiles =
      await this.documentModelFileRepository.getDocumentModelFiles(
        documentModelId,
      );
    return documentModelFiles;
  }
}
