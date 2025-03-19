import { Module } from '@nestjs/common';
import { CreateClientUseCase } from 'src/modules/client/use-cases/create-client.use-case';
import { ClientController } from './client.controller';
import { DatabaseModule } from 'src/infra/database/database.module';

@Module({
  providers: [CreateClientUseCase],
  controllers: [ClientController],
  imports: [DatabaseModule],
})
export class ClientModule {}
