import { Cases as PrismaCase } from '@prisma/client';
import { Case } from 'src/modules/cases/entities/case.entity';

export class PrismaCaseMapper {
  static toPrisma({
    id,
    createdById,
    title,
    description,
    priority,
    status,
    type,
    createdAt,
    updatedAt,
  }: Case): PrismaCase {
    return {
      id,
      createdById,
      title,
      description,
      priority,
      status,
      type,
      createdAt,
      updatedAt,
    };
  }
}
