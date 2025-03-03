import {
  Controller,
  Param,
  Post,
  Request,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Public } from '../auth/decorators/isPublic';
import { UploadFileDto } from './dtos/upload-file.dto';
import { UploadFileUseCase } from 'src/modules/upload/use-cases/upload-file.use-case';
import { CreateCaseUploadUseCase } from 'src/modules/case-upload/use-cases/create-case-upload.use-case';
import { AuthenticatedRequestModel } from '../auth/models/authenticated-request.model';

@Controller('upload')
export class UploadController {
  constructor(
    private uploadFileUseCase: UploadFileUseCase,
    private createCaseUploadUseCase: CreateCaseUploadUseCase,
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

    const caseUpload = await this.createCaseUploadUseCase.execute({
      caseId,
      uploadedById: user.id,
      fullpath: uploadedFile.fullPath,
      path: uploadedFile.path,
    });

    return caseUpload;
  }
}
