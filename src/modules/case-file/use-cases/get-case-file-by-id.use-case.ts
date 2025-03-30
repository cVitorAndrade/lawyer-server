import { Injectable, NotFoundException } from '@nestjs/common';
import { CaseFileRepository } from '../repositories/case-file.repository';

interface GetCaseFileByIdRequest {
  caseFileId: string;
}

@Injectable()
export class GetCaseFileByIdUseCase {
  constructor(private readonly caseFileRepository: CaseFileRepository) {}

  async execute({ caseFileId }: GetCaseFileByIdRequest) {
    const caseFile = await this.caseFileRepository.getCaseFileById(caseFileId);
    if (!caseFile) throw new NotFoundException();

    return caseFile;
  }
}
