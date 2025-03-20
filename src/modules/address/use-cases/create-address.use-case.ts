import { Injectable } from '@nestjs/common';
import { AddressRepository } from '../repositories/address.repository';
import { Address } from '../entitites/address.entity';

interface CreateAddressRequest {
  ownerId: string;
  name: string;
  postalCode: string;
  country: string;
  state: string;
  city: string;
  street: string;
  neighborhood: string;
  number: string;
  complement: string | null;
}

@Injectable()
export class CreateAddressUseCase {
  constructor(private readonly addressRepository: AddressRepository) {}

  async execute(createAddressRequest: CreateAddressRequest) {
    const address = new Address(createAddressRequest);
    await this.addressRepository.create(address);
    return address;
  }
}
