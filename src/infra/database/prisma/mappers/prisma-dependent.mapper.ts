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
    observation,
    relationship,
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
      observation,
      relationship,
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
    observation,
    relationship,
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
        observation,
        relationship,
        updatedAt,
      },
      id,
    );
  }
}
