import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/infra/database/database.module';
import { GetAllCaseFilesUseCase } from 'src/modules/case-file/use-cases/get-all-case-files.use-case';
import { CaseFileController } from './case-file.controller';
import { GetCaseFileByIdUseCase } from 'src/modules/case-file/use-cases/get-case-file-by-id.use-case';
import { DownloadCaseFileUseCase } from 'src/modules/case-file/use-cases/download-case-file.use-case';
import { StorageModule } from 'src/infra/storage/storage.module';
import { GetLawyerByIdUseCase } from 'src/modules/lawyer/use-cases/get-lawyer-by-id.use-case';

@Module({
  providers: [
    GetAllCaseFilesUseCase,
    GetCaseFileByIdUseCase,
    DownloadCaseFileUseCase,
    GetLawyerByIdUseCase,
  ],
  imports: [DatabaseModule, StorageModule],
  controllers: [CaseFileController],
})
export class CaseFileModule {}
