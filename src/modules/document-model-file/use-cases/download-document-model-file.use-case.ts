import { Injectable } from '@nestjs/common';
import { UploadRepository } from 'src/modules/upload/repositories/upload.repository';

interface DownloadDocumentModelFileRequest {
  path: string;
}

@Injectable()
export class DownloadDocumentModelFileUseCase {
  constructor(private readonly uploadRepository: UploadRepository) {}

  async execute({ path }: DownloadDocumentModelFileRequest) {
    const documentModelFile = await this.uploadRepository.downloadFile(
      'document-models',
      path,
    );

    return documentModelFile;
  }
}
