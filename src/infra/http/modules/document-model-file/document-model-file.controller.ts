import { Controller, Get, Param, Res } from '@nestjs/common';
import { Response } from 'express';
import { DownloadDocumentModelFileUseCase } from 'src/modules/document-model-file/use-cases/download-document-model-file.use-case';
import { GetDocumentModelFileByIdUseCase } from 'src/modules/document-model-file/use-cases/get-document-model-file-by-id.use-case';

@Controller('document-model-file')
export class DocumentModelFileController {
  constructor(
    private readonly getDocumentModelFileByIdUseCase: GetDocumentModelFileByIdUseCase,
    private readonly downloadDocumentModelFileUseCase: DownloadDocumentModelFileUseCase,
  ) {}

  @Get('download/file/:id')
  async downloadDocumentModelFile(
    @Param('id') documentModelFileId: string,
    @Res() res: Response,
  ) {
    const { originalname, path, mimetype } =
      await this.getDocumentModelFileByIdUseCase.execute({
        documentModelFileId,
      });

    const { fileBuffer } = await this.downloadDocumentModelFileUseCase.execute({
      path,
    });

    res.set({
      'Content-Type': mimetype,
      'Content-Disposition': `attachment; filename="${originalname}"`,
      'Access-Control-Expose-Headers': 'Content-Disposition',
    });

    return res.send(fileBuffer);
  }
}
