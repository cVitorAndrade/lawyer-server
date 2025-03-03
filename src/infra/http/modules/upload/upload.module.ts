import { Module } from '@nestjs/common';
import { UploadController } from './upload.controller';
import { UploadFileUseCase } from 'src/modules/upload/use-cases/upload-file.use-case';
import { StorageModule } from 'src/infra/storage/storage.module';
import { CreateCaseUploadUseCase } from 'src/modules/case-upload/use-cases/create-case-upload.use-case';
import { DatabaseModule } from 'src/infra/database/database.module';

@Module({
  providers: [UploadFileUseCase, CreateCaseUploadUseCase],
  controllers: [UploadController],
  imports: [StorageModule, DatabaseModule],
})
export class UploadModule {}
