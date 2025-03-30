import {
  Controller,
  Param,
  Post,
  Request,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { UploadFileDto } from './dtos/upload-file.dto';
import { UploadFileUseCase } from 'src/modules/upload/use-cases/upload-file.use-case';
import { CreateCaseFileUseCase } from 'src/modules/case-file/use-cases/create-case-file.use-case';
import { AuthenticatedRequestModel } from '../auth/models/authenticated-request.model';
import { CaseFileViewModel } from '../case-file/view-model/case-file.view-model';
import { CreateDocumentModelFileUseCase } from 'src/modules/document-model-file/use-cases/create-document-model-file.use-case';
import { DocumentModelFileViewModel } from '../document-model-file/view-model/document-model-file.view-model';

@Controller('upload')
export class UploadController {
  constructor(
    private readonly uploadFileUseCase: UploadFileUseCase,
    private readonly createCaseFileUseCase: CreateCaseFileUseCase,
    private readonly createDocumentModelFileUseCase: CreateDocumentModelFileUseCase,
  ) {}

  @Post('cases/:id')
  @UseInterceptors(FileInterceptor('file'))
  async uploadCaseFile(
    @UploadedFile() file: UploadFileDto,
    @Param('id') caseId: string,
    @Request() request: AuthenticatedRequestModel,
  ) {
    const { user } = request;
    const path = `cases/${caseId}`;
    const uploadedFile = await this.uploadFileUseCase.execute({ file, path });

    const caseFile = await this.createCaseFileUseCase.execute({
      caseId,
      uploadedById: user.id,
      fullpath: uploadedFile.fullPath,
      path: `${caseId}/${uploadedFile.path}`,
      mimetype: file.mimetype,
      originalname: file.originalname,
      size: file.size,
    });

    return CaseFileViewModel.toHttp(caseFile);
  }

  @Post('document-model/:id')
  @UseInterceptors(FileInterceptor('file'))
  async uploadDocumentModel(
    @UploadedFile() file: UploadFileDto,
    @Param('id') documentModelId: string,
    @Request() request: AuthenticatedRequestModel,
  ) {
    const { user } = request;
    const path = `document-models/${documentModelId}`;
    const uploadedFile = await this.uploadFileUseCase.execute({
      file,
      path,
    });

    const documentModelFile = await this.createDocumentModelFileUseCase.execute(
      {
        documentModelId,
        uploadedById: user.id,
        fullpath: uploadedFile.fullPath,
        path: `${documentModelId}/${uploadedFile.path}`,
        mimetype: file.mimetype,
        originalname: file.originalname,
        size: file.size,
      },
    );

    return DocumentModelFileViewModel.toHttp(documentModelFile);
  }
}
