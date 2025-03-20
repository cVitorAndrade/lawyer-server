import { Address } from 'src/modules/address/entitites/address.entity';

export class AddressViewModel {
  static toHttp({
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
  }: Address) {
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
}
