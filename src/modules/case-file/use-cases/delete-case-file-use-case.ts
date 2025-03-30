import { Injectable, NotFoundException } from '@nestjs/common';
import { CaseFileRepository } from '../repositories/case-file.repository';
import { UploadRepository } from 'src/modules/upload/repositories/upload.repository';

interface DeleteCaseFileRequest {
  caseFileId: string;
}

@Injectable()
export class DeleteCaseFileUseCase {
  constructor(
    private readonly caseFileRepository: CaseFileRepository,
    private readonly uploadRepository: UploadRepository,
  ) {}

  async execute({ caseFileId }: DeleteCaseFileRequest) {
    const caseFile = await this.caseFileRepository.getCaseFileById(caseFileId);
    if (!caseFile) throw new NotFoundException();

    const { path } = caseFile;
    await this.caseFileRepository.delete(caseFileId);
    await this.uploadRepository.deleteFile('cases', path);
  }
}
