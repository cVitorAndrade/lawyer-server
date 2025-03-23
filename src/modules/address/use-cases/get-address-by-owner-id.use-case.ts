import { Injectable, NotFoundException } from '@nestjs/common';
import { AddressRepository } from '../repositories/address.repository';

interface GetAddressByOwnerIdRequest {
  ownerId: string;
}
@Injectable()
export class GetAddressByOwnerIdUseCase {
  constructor(private readonly addressRepository: AddressRepository) {}

  async execute({ ownerId }: GetAddressByOwnerIdRequest) {
    const address = this.addressRepository.getAddressByOwnerId(ownerId);
    if (!address) throw new NotFoundException();

    return address;
  }
}
