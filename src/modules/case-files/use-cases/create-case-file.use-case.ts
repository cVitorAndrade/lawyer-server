import { Injectable } from '@nestjs/common';
import { CaseFileRepository } from '../repositories/case-file.repository';
import { CaseFile } from '../entities/case-file.entity';

interface CreateCaseFileRequest {
  caseId: string;
  uploadedById: string;
  path: string;
  fullpath: string;
}

@Injectable()
export class CreateCaseFileUseCase {
  constructor(private caseFileRepository: CaseFileRepository) {}

  async execute(createCaseFileRequest: CreateCaseFileRequest) {
    const caseFile = new CaseFile(createCaseFileRequest);
    await this.caseFileRepository.create(caseFile);
    return caseFile;
  }
}
