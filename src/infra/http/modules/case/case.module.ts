import { Module } from '@nestjs/common';
import { CaseController } from './case.controller';
import { CreateCaseUseCase } from 'src/modules/cases/use-cases/create-case.use-case';
import { DatabaseModule } from 'src/infra/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [CaseController],
  providers: [CreateCaseUseCase],
})
export class CaseModule {}
