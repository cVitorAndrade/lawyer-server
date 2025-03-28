import { Controller, Delete, Get, Param, Request, Res } from '@nestjs/common';
import { Response } from 'express';
import { DeleteDocumenModelFileByIdUseCase } from 'src/modules/document-model-file/use-cases/delete-document-model-file-by-id.use-case';
import { DownloadDocumentModelFileUseCase } from 'src/modules/document-model-file/use-cases/download-document-model-file.use-case';
import { GetDocumentModelFileByIdUseCase } from 'src/modules/document-model-file/use-cases/get-document-model-file-by-id.use-case';
import { AuthenticatedRequestModel } from '../auth/models/authenticated-request.model';

@Controller('document-model-file')
export class DocumentModelFileController {
  constructor(
    private readonly getDocumentModelFileByIdUseCase: GetDocumentModelFileByIdUseCase,
    private readonly downloadDocumentModelFileUseCase: DownloadDocumentModelFileUseCase,
    private readonly deleteDocumenModelFileByIdUseCase: DeleteDocumenModelFileByIdUseCase,
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

  @Delete(':id')
  async DeleteDocumentModelFilesUseCase(
    @Param('id') documentModelFileId: string,
    @Request() request: AuthenticatedRequestModel,
  ) {
    const { user } = request;
    await this.deleteDocumenModelFileByIdUseCase.execute({
      documentModelFileId,
      lawyerId: user.id,
    });
  }
}
