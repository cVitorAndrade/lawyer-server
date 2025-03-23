import { Module } from '@nestjs/common';
import { CaseController } from './case.controller';
import { CreateCaseUseCase } from 'src/modules/case/use-cases/create-case.use-case';
import { DatabaseModule } from 'src/infra/database/database.module';
import { GetAllCasesUseCase } from 'src/modules/case/use-cases/get-all-cases.use-case';
import { GetAllCaseLawyersUseCase } from 'src/modules/case-lawyer/use-cases/get-all-case-lawyers.use-case';
import { GetAllCaseClientsUseCase } from 'src/modules/case-client/use-cases/get-all-case-clients.use-case';
import { GetLawyerByIdUseCase } from 'src/modules/lawyer/use-cases/get-lawyer-by-id.use-case';
import { CreateCaseLawyerUseCase } from 'src/modules/case-lawyer/use-cases/create-case-lawyer.use-case';
import { GetAllLawyerCasesUseCase } from 'src/modules/case-lawyer/use-cases/get-all-lawyer-cases.use-case';
import { GetCaseByIdUseCase } from 'src/modules/case/use-cases/get-case-by-id.use-case';
import { GetAddressByOwnerIdUseCase } from 'src/modules/address/use-cases/get-address-by-owner-id.use-case';

@Module({
  imports: [DatabaseModule],
  controllers: [CaseController],
  providers: [
    CreateCaseUseCase,
    GetAllCasesUseCase,
    CreateCaseLawyerUseCase,
    GetAllCaseLawyersUseCase,
    GetAllCaseClientsUseCase,
    GetLawyerByIdUseCase,
    GetAllLawyerCasesUseCase,
    GetCaseByIdUseCase,
    GetAddressByOwnerIdUseCase,
  ],
})
export class CaseModule {}
