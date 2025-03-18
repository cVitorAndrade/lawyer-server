import { Client } from 'src/modules/client/entities/client.entity';

export class ClienViewModel {
  static toHttp({
    id,
    createdById,
    name,
    email,
    birthDate,
    telephone,
    createdAt,
    updatedAt,
  }: Client) {
    return {
      id,
      createdById,
      name,
      email,
      birthDate,
      telephone,
      createdAt,
      updatedAt,
    };
  }
}
