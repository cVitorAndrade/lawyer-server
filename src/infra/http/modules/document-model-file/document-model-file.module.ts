import { Module } from '@nestjs/common';
import { DocumentModelFileController } from './document-model-file.controller';
import { GetDocumentModelFileByIdUseCase } from 'src/modules/document-model-file/use-cases/get-document-model-file-by-id.use-case';
import { DatabaseModule } from 'src/infra/database/database.module';
import { DownloadDocumentModelFileUseCase } from 'src/modules/document-model-file/use-cases/download-document-model-file.use-case';
import { StorageModule } from 'src/infra/storage/storage.module';
import { DeleteDocumenModelFileByIdUseCase } from 'src/modules/document-model-file/use-cases/delete-document-model-file-by-id.use-case';
import { DownloadAllDocumentModelFilesUseCase } from 'src/modules/document-model-file/use-cases/download-all-document-model-files';
import { GetDocumentModelByIdUseCase } from 'src/modules/document-model/use-cases/get-document-model-by-id.use-case';

@Module({
  providers: [
    GetDocumentModelFileByIdUseCase,
    DownloadDocumentModelFileUseCase,
    DeleteDocumenModelFileByIdUseCase,
    DownloadAllDocumentModelFilesUseCase,
    GetDocumentModelByIdUseCase,
  ],
  controllers: [DocumentModelFileController],
  imports: [DatabaseModule, StorageModule],
})
export class DocumentModelFileModule {}
