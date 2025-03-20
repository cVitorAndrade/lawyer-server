import { Body, Controller, Post } from '@nestjs/common';
import { CreateAddressUseCase } from 'src/modules/address/use-cases/create-address.use-case';
import { CreateAddressDto } from './dtos/create-address.dto';
import { AddressViewModel } from './view-model/address.view-model';

@Controller('address')
export class AddressController {
  constructor(private readonly createAddressUseCase: CreateAddressUseCase) {}

  @Post()
  async createAddress(@Body() body: CreateAddressDto) {
    const address = await this.createAddressUseCase.execute(body);
    return AddressViewModel.toHttp(address);
  }
}
