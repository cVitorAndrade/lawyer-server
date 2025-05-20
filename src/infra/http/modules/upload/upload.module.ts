import { Module } from '@nestjs/common';
import { UploadController } from './upload.controller';
import { UploadFileUseCase } from 'src/modules/upload/use-cases/upload-file.use-case';
import { StorageModule } from 'src/infra/storage/storage.module';
import { CreateCaseFileUseCase } from 'src/modules/case-file/use-cases/create-case-file.use-case';
import { DatabaseModule } from 'src/infra/database/database.module';
import { CreateDocumentModelFileUseCase } from 'src/modules/document-model-file/use-cases/create-document-model-file.use-case';
import { CreateClientFileUseCase } from 'src/modules/client-file/use-cases/create-client-file.use-case';

@Module({
  providers: [
    UploadFileUseCase,
    CreateCaseFileUseCase,
    CreateDocumentModelFileUseCase,
    CreateClientFileUseCase,
  ],
  controllers: [UploadController],
  imports: [StorageModule, DatabaseModule],
})
export class UploadModule {}
