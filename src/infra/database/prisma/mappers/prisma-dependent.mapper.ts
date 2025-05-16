import { Dependents as PrismaDepedent } from '@prisma/client';
import { Dependent } from 'src/modules/dependent/entities/dependent.entity';

export class PrismaDependentMapper {
  static toPrisma({
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
  }: Dependent): PrismaDepedent {
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

  static toDomain({
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
  }: PrismaDepedent): Dependent {
    return new Dependent(
      {
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
      },
      id,
    );
  }
}
