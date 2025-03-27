import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Request,
} from '@nestjs/common';
import { CreateDocumentModelUseCase } from 'src/modules/document-model/use-cases/create-document-model.use-case';
import { CreateDocumentModelDto } from './dtos/create-document-model.dto';
import { AuthenticatedRequestModel } from '../auth/models/authenticated-request.model';
import { DocumentModelViewModel } from './view-model/document-model.view-model';
import { GetLawyerDocumentModelUseCase } from 'src/modules/document-model/use-cases/get-lawyer-document-models.use-case';
import { GetDocumentModelFilesUseCase } from 'src/modules/document-model-file/use-cases/get-document-model-files.use-case';
import { DocumentModelFileViewModel } from '../document-file-model/view-model/document-model-file.view-model';
import { GetDocumentModelByIdUseCase } from 'src/modules/document-model/use-cases/get-document-model-by-id.use-case';
import { DeleteDocumentModelUseCase } from 'src/modules/document-model/use-cases/delete-document-model.use-case';

@Controller('document-model')
export class DocumentModelController {
  constructor(
    private readonly createDocumentModelUseCase: CreateDocumentModelUseCase,
    private readonly getLawyerDocumentModelUseCase: GetLawyerDocumentModelUseCase,
    private readonly getDocumentModelFilesUseCase: GetDocumentModelFilesUseCase,
    private readonly getDocumentModelByIdUseCase: GetDocumentModelByIdUseCase,
    private readonly deleteDocumentModelUseCase: DeleteDocumentModelUseCase,
  ) {}

  @Post()
  async createDocumentModel(
    @Body() body: CreateDocumentModelDto,
    @Request() request: AuthenticatedRequestModel,
  ) {
    const { user } = request;
    const documentModel = await this.createDocumentModelUseCase.execute({
      ...body,
      ownerId: user.id,
    });
    return DocumentModelViewModel.toHttp(documentModel);
  }

  @Get()
  async getLawyerDocumentModels(@Request() request: AuthenticatedRequestModel) {
    const { user } = request;
    const documentModels = await this.getLawyerDocumentModelUseCase.execute({
      lawyerId: user.id,
    });

    return Promise.all(
      documentModels.map(async (documentModel) => {
        const files = await this.getDocumentModelFilesUseCase.execute({
          documentModelId: documentModel.id,
        });

        return {
          ...DocumentModelViewModel.toHttp(documentModel),
          files: files.map(DocumentModelFileViewModel.toHttp),
        };
      }),
    );
  }

  @Get(':id')
  async getDocumentModel(@Param('id') documentModelId: string) {
    const documentModel = await this.getDocumentModelByIdUseCase.execute({
      documentModelId,
    });

    const documentModelFiles = await this.getDocumentModelFilesUseCase.execute({
      documentModelId,
    });

    return {
      ...DocumentModelViewModel.toHttp(documentModel),
      files: documentModelFiles.map(DocumentModelFileViewModel.toHttp),
    };
  }

  @Delete('/:id')
  async deleteDocumentModel(
    @Param('id') documentModelId: string,
    @Request() request: AuthenticatedRequestModel,
  ) {
    const { user } = request;

    await this.deleteDocumentModelUseCase.execute({
      documentModelId,
      lawyerId: user.id,
    });
  }
}
