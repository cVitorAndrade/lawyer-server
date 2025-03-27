import { Injectable } from '@nestjs/common';
import { UploadRepository } from 'src/modules/upload/repositories/upload.repository';

interface DeleteDocumentModelFilesRequest {
  documentModelId: string;
}

@Injectable()
export class DeleteDocumentModelFilesUseCase {
  constructor(private readonly uploadRepository: UploadRepository) {}

  async execute({ documentModelId }: DeleteDocumentModelFilesRequest) {
    await this.uploadRepository.deleteFolder(
      'document-models',
      documentModelId,
    );
  }
}
