import { Address } from '../entitites/address.entity';

export abstract class AddressRepository {
  abstract create(address: Address): Promise<void>;
}
