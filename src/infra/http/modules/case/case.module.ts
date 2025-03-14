import { Module } from '@nestjs/common';
import { CaseController } from './case.controller';
import { CreateCaseUseCase } from 'src/modules/cases/use-cases/create-case.use-case';
import { DatabaseModule } from 'src/infra/database/database.module';
import { GetAllCasesByLawyerIdUseCase } from 'src/modules/cases/use-cases/get-all-cases-by-lawyer-id.use-case';
import { GetAllCasesUseCase } from 'src/modules/cases/use-cases/get-all-cases.use-case';

@Module({
  imports: [DatabaseModule],
  controllers: [CaseController],
  providers: [
    CreateCaseUseCase,
    GetAllCasesByLawyerIdUseCase,
    GetAllCasesUseCase,
  ],
})
export class CaseModule {}
