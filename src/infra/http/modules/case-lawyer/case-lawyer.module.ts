import { Module } from '@nestjs/common';
import { CaseLawyerController } from './case-lawyer.controller';
import { CreateCaseLawyerUseCase } from 'src/modules/case-lawyer/use-cases/create-case-lawyer.use-case';
import { DatabaseModule } from 'src/infra/database/database.module';

@Module({
  controllers: [CaseLawyerController],
  providers: [CreateCaseLawyerUseCase],
  imports: [DatabaseModule],
})
export class CaseLawyerModule {}
