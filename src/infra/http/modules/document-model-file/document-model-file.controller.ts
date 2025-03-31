import * as archiver from 'archiver';
import { Controller, Delete, Get, Param, Request, Res } from '@nestjs/common';
import { Response } from 'express';
import { DeleteDocumenModelFileByIdUseCase } from 'src/modules/document-model-file/use-cases/delete-document-model-file-by-id.use-case';
import { DownloadDocumentModelFileUseCase } from 'src/modules/document-model-file/use-cases/download-document-model-file.use-case';
import { GetDocumentModelFileByIdUseCase } from 'src/modules/document-model-file/use-cases/get-document-model-file-by-id.use-case';
import { AuthenticatedRequestModel } from '../auth/models/authenticated-request.model';
import { DownloadAllDocumentModelFilesUseCase } from 'src/modules/document-model-file/use-cases/download-all-document-model-files';
import { GetDocumentModelByIdUseCase } from 'src/modules/document-model/use-cases/get-document-model-by-id.use-case';

@Controller('document-model-file')
export class DocumentModelFileController {
  constructor(
    private readonly getDocumentModelFileByIdUseCase: GetDocumentModelFileByIdUseCase,
    private readonly downloadDocumentModelFileUseCase: DownloadDocumentModelFileUseCase,
    private readonly deleteDocumenModelFileByIdUseCase: DeleteDocumenModelFileByIdUseCase,
    private readonly downloadAllDocumentModelFilesUseCase: DownloadAllDocumentModelFilesUseCase,
    private readonly getDocumentModelByIdUseCase: GetDocumentModelByIdUseCase,
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

  @Get('download/all/files/:id')
  async downloadAllDocumentModelFiles(
    @Param('id') documentModelId: string,
    @Request() request: AuthenticatedRequestModel,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { user } = request;

    const { title } = await this.getDocumentModelByIdUseCase.execute({
      documentModelId,
    });

    const documentModelFiles =
      await this.downloadAllDocumentModelFilesUseCase.execute({
        documentModelId,
        lawyerId: user.id,
      });

    const archive = archiver('zip', { zlib: { level: 9 } });

    res.set({
      'Content-Type': 'application/zip',
      'Content-Disposition': `attachment; filename="${title}.zip"`,
      'Access-Control-Expose-Headers': 'Content-Disposition',
    });

    documentModelFiles.forEach((file) => {
      archive.append(file.fileBuffer, { name: file.filename });
    });

    archive.pipe(res);

    await archive.finalize();
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
