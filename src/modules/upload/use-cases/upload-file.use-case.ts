import { Injectable } from '@nestjs/common';
import { UploadFileDto } from 'src/infra/http/modules/upload/dtos/upload-file.dto';
import { UploadRepository } from '../repositories/upload.repository';

interface UploadFileRequest {
  file: UploadFileDto;
  path: string;
}

@Injectable()
export class UploadFileUseCase {
  constructor(private uploadRepository: UploadRepository) {}

  async execute({ file, path }: UploadFileRequest) {
    const data = await this.uploadRepository.uploadFile(file, path);
    return data;
  }
}
