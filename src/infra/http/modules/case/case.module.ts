import { Module } from '@nestjs/common';
import { CaseController } from './case.controller';
import { CreateCaseUseCase } from 'src/modules/cases/use-cases/create-case.use-case';
import { DatabaseModule } from 'src/infra/database/database.module';
import { GetAllCasesByLawyerIdUseCase } from 'src/modules/cases/use-cases/get-all-cases-by-lawyer-id.use-case';
import { GetAllCasesUseCase } from 'src/modules/cases/use-cases/get-all-cases.use-case';
import { GetAllCaseLawyersUseCase } from 'src/modules/case-lawyer/use-cases/get-all-case-lawyers.use-case';
import { GetAllCaseClientsUseCase } from 'src/modules/case-client/use-cases/get-all-case-clients.use-case';
import { GetLawyerByIdUseCase } from 'src/modules/lawyer/use-cases/get-lawyer-by-id.use-case';
import { CreateCaseLawyerUseCase } from 'src/modules/case-lawyer/use-cases/create-case-lawyer.use-case';

@Module({
  imports: [DatabaseModule],
  controllers: [CaseController],
  providers: [
    CreateCaseUseCase,
    GetAllCasesByLawyerIdUseCase,
    GetAllCasesUseCase,
    CreateCaseLawyerUseCase,
    GetAllCaseLawyersUseCase,
    GetAllCaseClientsUseCase,
    GetLawyerByIdUseCase,
  ],
})
export class CaseModule {}
