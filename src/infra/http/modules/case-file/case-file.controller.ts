import { Controller, Get, Param } from '@nestjs/common';
import { GetAllCaseFilesUseCase } from 'src/modules/case-files/use-cases/get-all-case-files.use-case';
import { CaseFileViewModel } from './view-model/case-file.view-model';

@Controller('case-file')
export class CaseFileController {
  constructor(private getAllCaseFilesUseCase: GetAllCaseFilesUseCase) {}

  @Get('case/:id')
  async getAllCaseFiles(@Param('id') caseId: string) {
    const caseFiles = await this.getAllCaseFilesUseCase.execute({ caseId });
    return caseFiles.map((caseFile) => CaseFileViewModel.toHttp(caseFile));
  }
}
