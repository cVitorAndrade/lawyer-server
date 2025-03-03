import { Injectable } from '@nestjs/common';
import { CaseUploadRepository } from '../repositories/case-upload.repository';
import { CaseUpload } from '../entities/case-upload.entity';

interface CreateCaseUploadRequest {
  caseId: string;
  uploadedById: string;
  path: string;
  fullpath: string;
}

@Injectable()
export class CreateCaseUploadUseCase {
  constructor(private caseUploadRepository: CaseUploadRepository) {}

  async execute(createCaseUploadRequest: CreateCaseUploadRequest) {
    const caseUpload = new CaseUpload(createCaseUploadRequest);
    await this.caseUploadRepository.create(caseUpload);
    return caseUpload;
  }
}
