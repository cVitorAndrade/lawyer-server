import { Module } from '@nestjs/common';
import { CreateClientUseCase } from 'src/modules/client/use-cases/create-client.use-case';
import { ClientController } from './client.controller';
import { DatabaseModule } from 'src/infra/database/database.module';
import { GetClientsByLawyerIdUseCase } from 'src/modules/client/use-cases/get-clients-by-lawyer-id.use-case';
import { GetCasesByClientIdUseCase } from 'src/modules/case-client/use-cases/get-cases-by-client-id.use-case';

@Module({
  providers: [
    CreateClientUseCase,
    GetClientsByLawyerIdUseCase,
    GetCasesByClientIdUseCase,
  ],
  controllers: [ClientController],
  imports: [DatabaseModule],
})
export class ClientModule {}
