import { Module } from '@nestjs/common';
import { CreateClientUseCase } from 'src/modules/client/use-cases/create-client.use-case';
import { ClientController } from './client.controller';
import { DatabaseModule } from 'src/infra/database/database.module';
import { GetClientsByLawyerIdUseCase } from 'src/modules/client/use-cases/get-clients-by-lawyer-id.use-case';
import { GetCasesByClientIdUseCase } from 'src/modules/case-client/use-cases/get-cases-by-client-id.use-case';
import { GetDependentsByClientIdUseCase } from 'src/modules/dependent/use-cases/get-dependents-by-client-id.use-case';
import { GetClientByIdUseCase } from 'src/modules/client/use-cases/get-client-by-id.use-case';
import { GetAddressByOwnerIdUseCase } from 'src/modules/address/use-cases/get-address-by-owner-id.use-case';

@Module({
  providers: [
    CreateClientUseCase,
    GetClientsByLawyerIdUseCase,
    GetCasesByClientIdUseCase,
    GetDependentsByClientIdUseCase,
    GetClientByIdUseCase,
    GetAddressByOwnerIdUseCase,
  ],
  controllers: [ClientController],
  imports: [DatabaseModule],
})
export class ClientModule {}
