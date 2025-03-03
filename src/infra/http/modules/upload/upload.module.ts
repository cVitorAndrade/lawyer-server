import { Module } from '@nestjs/common';
import { UploadController } from './upload.controller';
import { UploadFileUseCase } from 'src/modules/upload/use-cases/upload-file.use-case';
import { StorageModule } from 'src/infra/storage/storage.module';
import { CreateCaseFileUseCase } from 'src/modules/case-files/use-cases/create-case-file.use-case';
import { DatabaseModule } from 'src/infra/database/database.module';

@Module({
  providers: [UploadFileUseCase, CreateCaseFileUseCase],
  controllers: [UploadController],
  imports: [StorageModule, DatabaseModule],
})
export class UploadModule {}
