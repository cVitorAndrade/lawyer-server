import { Clients as PrismaClient } from '@prisma/client';
import { Client } from 'src/modules/client/entities/client.entity';

export class PrismaClientMapper {
  static toPrisma({
    id,
    createdById,
    name,
    email,
    telephone,
    birthDate,
    createdAt,
    updatedAt,
  }: Client): PrismaClient {
    return {
      id,
      createdById,
      name,
      email,
      telephone,
      birthDate,
      createdAt,
      updatedAt,
    };
  }
}
