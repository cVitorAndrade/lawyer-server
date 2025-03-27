import { Module } from '@nestjs/common';
import { CreateDocumentModelUseCase } from 'src/modules/document-model/use-cases/create-document-model.use-case';
import { DocumentModelController } from './document-model.controller';
import { DatabaseModule } from 'src/infra/database/database.module';
import { GetLawyerDocumentModelUseCase } from 'src/modules/document-model/use-cases/get-lawyer-document-models.use-case';
import { GetDocumentModelFilesUseCase } from 'src/modules/document-model-file/use-cases/get-document-model-files.use-case';
import { GetDocumentModelByIdUseCase } from 'src/modules/document-model/use-cases/get-document-model-by-id.use-case';
import { DeleteDocumentModelUseCase } from 'src/modules/document-model/use-cases/delete-document-model.use-case';
import { DeleteDocumentModelFilesUseCase } from 'src/modules/document-model-file/use-cases/delete-document-model-files.use-case';
import { StorageModule } from 'src/infra/storage/storage.module';

@Module({
  providers: [
    CreateDocumentModelUseCase,
    GetLawyerDocumentModelUseCase,
    GetDocumentModelFilesUseCase,
    GetDocumentModelByIdUseCase,
    DeleteDocumentModelUseCase,
    DeleteDocumentModelFilesUseCase,
  ],
  controllers: [DocumentModelController],
  imports: [StorageModule, DatabaseModule],
})
export class DocumentModelModule {}
