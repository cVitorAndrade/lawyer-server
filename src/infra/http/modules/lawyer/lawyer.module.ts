import { Module } from '@nestjs/common';
import { LawyerController } from './lawyer.controller';
import { CreateLawyerUseCase } from 'src/modules/lawyer/use-cases/create-lawyer.use-case';
import { DatabaseModule } from 'src/infra/database/database.module';
import { GetLawyerByIdUseCase } from 'src/modules/lawyer/use-cases/get-lawyer-by-id.use-case';

@Module({
  imports: [DatabaseModule],
  controllers: [LawyerController],
  providers: [CreateLawyerUseCase, GetLawyerByIdUseCase],
})
export class LawyerModule {}
