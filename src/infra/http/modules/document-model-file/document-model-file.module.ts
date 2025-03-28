import { Module } from '@nestjs/common';
import { DocumentModelFileController } from './document-model-file.controller';
import { GetDocumentModelFileByIdUseCase } from 'src/modules/document-model-file/use-cases/get-document-model-file-by-id.use-case';
import { DatabaseModule } from 'src/infra/database/database.module';
import { DownloadDocumentModelFileUseCase } from 'src/modules/document-model-file/use-cases/download-document-model-file.use-case';
import { StorageModule } from 'src/infra/storage/storage.module';

@Module({
  providers: [
    GetDocumentModelFileByIdUseCase,
    DownloadDocumentModelFileUseCase,
  ],
  controllers: [DocumentModelFileController],
  imports: [DatabaseModule, StorageModule],
})
export class DocumentModelFileModule {}
