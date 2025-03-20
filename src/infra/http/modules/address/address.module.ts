import { Module } from '@nestjs/common';
import { CreateAddressUseCase } from 'src/modules/address/use-cases/create-address.use-case';
import { AddressController } from './address.controller';
import { DatabaseModule } from 'src/infra/database/database.module';

@Module({
  providers: [CreateAddressUseCase],
  controllers: [AddressController],
  imports: [DatabaseModule],
})
export class AddressModule {}
