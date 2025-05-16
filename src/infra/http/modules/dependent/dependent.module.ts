import { Module } from '@nestjs/common';
import { DependentController } from './dependent.controller';
import { DatabaseModule } from 'src/infra/database/database.module';
import { CreateDependentUseCase } from 'src/modules/dependent/use-cases/create-dependent.use-case';

@Module({
  controllers: [DependentController],
  imports: [DatabaseModule],
  providers: [CreateDependentUseCase],
})
export class DependentModule {}
