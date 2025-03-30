import { Injectable } from '@nestjs/common';
import { CaseFileRepository } from '../repositories/case-file.repository';

interface GetAllCaseFilesRequest {
  caseId: string;
}

@Injectable()
export class GetAllCaseFilesUseCase {
  constructor(private caseFileRepository: CaseFileRepository) {}

  async execute({ caseId }: GetAllCaseFilesRequest) {
    const caseFiles = await this.caseFileRepository.getAllCaseFiles(caseId);
    return caseFiles;
  }
}
