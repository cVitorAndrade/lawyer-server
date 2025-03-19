import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/infra/database/database.module';
import { CreateCaseClientUseCase } from 'src/modules/case-client/use-cases/create-case-client.use-case';
import { CaseClientController } from './case-client.controller';

@Module({
  providers: [CreateCaseClientUseCase],
  controllers: [CaseClientController],
  imports: [DatabaseModule],
})
export class CaseClientModule {}
