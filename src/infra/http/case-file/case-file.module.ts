import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/infra/database/database.module';
import { GetAllCaseFilesUseCase } from 'src/modules/case-files/use-cases/get-all-case-files.use-case';
import { CaseFileController } from './case-file.controller';

@Module({
  providers: [GetAllCaseFilesUseCase],
  imports: [DatabaseModule],
  controllers: [CaseFileController],
})
export class CaseFileModule {}
