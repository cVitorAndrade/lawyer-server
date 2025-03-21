import { Controller, Get, Param, Res } from '@nestjs/common';
import { GetAllCaseFilesUseCase } from 'src/modules/case-files/use-cases/get-all-case-files.use-case';
import { CaseFileViewModel } from './view-model/case-file.view-model';
import { GetCaseFileByIdUseCase } from 'src/modules/case-files/use-cases/get-case-file-by-id.use-case';
import { DownloadCaseFileUseCase } from 'src/modules/case-files/use-cases/download-case-file.use-case';
import { Response } from 'express';
import { GetLawyerByIdUseCase } from 'src/modules/lawyer/use-cases/get-lawyer-by-id.use-case';
import { LawyerViewModel } from '../lawyer/view-model/lawyer.view-model';

@Controller('case-file')
export class CaseFileController {
  constructor(
    private readonly getAllCaseFilesUseCase: GetAllCaseFilesUseCase,
    private readonly getLawyerByIdUseCase: GetLawyerByIdUseCase,
    private readonly getCaseFileByIdUseCase: GetCaseFileByIdUseCase,
    private readonly downloadCaseFileUseCase: DownloadCaseFileUseCase,
  ) {}

  @Get('case/:id')
  async getAllCaseFiles(@Param('id') caseId: string) {
    const caseFiles = await this.getAllCaseFilesUseCase.execute({ caseId });
    return Promise.all(
      caseFiles.map(async (caseFile) => {
        const uploadedBy = await this.getLawyerByIdUseCase.execute({
          lawyerId: caseFile.uploadedById,
        });

        return {
          ...CaseFileViewModel.toHttp(caseFile),
          uploadedBy: LawyerViewModel.toHttp(uploadedBy),
        };
      }),
    );
  }

  @Get('download/file/:id')
  async downloadCaseFile(@Param('id') id: string, @Res() res: Response) {
    const { originalname, path, mimetype } =
      await this.getCaseFileByIdUseCase.execute({
        caseFileId: id,
      });

    const { fileBuffer } = await this.downloadCaseFileUseCase.execute({
      path: path,
    });

    res.set({
      'Content-Type': mimetype,
      'Content-Disposition': `attachment; filename="${originalname}"`,
      'Access-Control-Expose-Headers': 'Content-Disposition',
    });

    return res.send(fileBuffer);
  }
}
