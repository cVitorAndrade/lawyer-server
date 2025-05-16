import { Dependent } from 'src/modules/dependent/entities/dependent.entity';

export class DependentViewModel {
  static toHttp({
    id,
    birthDate,
    clientId,
    cpf,
    createdAt,
    email,
    gender,
    maritalStatus,
    motherName,
    name,
    occupation,
    rg,
    telephone,
    updatedAt,
  }: Dependent) {
    return {
      id,
      birthDate,
      clientId,
      cpf,
      createdAt,
      email,
      gender,
      maritalStatus,
      motherName,
      name,
      occupation,
      rg,
      telephone,
      updatedAt,
    };
  }
}
