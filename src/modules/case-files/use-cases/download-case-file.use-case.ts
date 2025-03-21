import { Injectable } from '@nestjs/common';
import { UploadRepository } from 'src/modules/upload/repositories/upload.repository';

interface DownloadCaseFileRequest {
  path: string;
}

@Injectable()
export class DownloadCaseFileUseCase {
  constructor(private readonly uploadRepository: UploadRepository) {}

  async execute({ path }: DownloadCaseFileRequest) {
    const caseFile = await this.uploadRepository.downloadCaseFile(path);
    return caseFile;
  }
}
