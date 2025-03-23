import { Addresses as PrismaAddress } from '@prisma/client';
import { Address } from 'src/modules/address/entitites/address.entity';

export class PrismaAddressMapper {
  static toPrisma({
    id,
    ownerId,
    name,
    postalCode,
    country,
    state,
    city,
    neighborhood,
    street,
    number,
    complement,
    createdAt,
    updatedAt,
  }: Address): PrismaAddress {
    return {
      id,
      ownerId,
      name,
      postalCode,
      country,
      state,
      city,
      neighborhood,
      street,
      number,
      complement,
      createdAt,
      updatedAt,
    };
  }

  static toDomain({
    id,
    ownerId,
    name,
    postalCode,
    country,
    state,
    city,
    neighborhood,
    street,
    number,
    complement,
    createdAt,
    updatedAt,
  }: PrismaAddress): Address {
    return new Address(
      {
        ownerId,
        name,
        postalCode,
        country,
        state,
        city,
        neighborhood,
        street,
        number,
        complement,
        createdAt,
        updatedAt,
      },
      id,
    );
  }
}
