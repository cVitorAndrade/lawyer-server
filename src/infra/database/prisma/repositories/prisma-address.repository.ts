import { Injectable } from '@nestjs/common';
import { Address } from 'src/modules/address/entitites/address.entity';
import { AddressRepository } from 'src/modules/address/repositories/address.repository';
import { PrismaAddressMapper } from '../mappers/prisma-address.mapper';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PrismaAddressRepository implements AddressRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async create(address: Address): Promise<void> {
    const prismaAddress = PrismaAddressMapper.toPrisma(address);
    await this.prismaService.addresses.create({
      data: prismaAddress,
    });
  }

  async getAddressByOwnerId(clientId: string): Promise<Address | null> {
    const prismaAddress = await this.prismaService.addresses.findFirst({
      where: {
        ownerId: clientId,
      },
    });
    if (!prismaAddress) return null;

    return PrismaAddressMapper.toDomain(prismaAddress);
  }
}
