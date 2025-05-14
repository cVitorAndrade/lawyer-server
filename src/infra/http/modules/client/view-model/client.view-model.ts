import { Client } from 'src/modules/client/entities/client.entity';

export class ClientViewModel {
  static toHttp({
    id,
    createdById,
    name,
    email,
    birthDate,
    telephone,
    cpf,
    gender,
    maritalStatus,
    motherName,
    occupation,
    rg,
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
      cpf,
      gender,
      maritalStatus,
      motherName,
      occupation,
      rg,
      createdAt,
      updatedAt,
    };
  }
}
