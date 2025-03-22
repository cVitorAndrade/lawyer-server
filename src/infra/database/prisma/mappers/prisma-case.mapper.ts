import { Cases as PrismaCase } from '@prisma/client';
import { Case } from 'src/modules/case/entities/case.entity';
import { CasePriority } from 'src/modules/case/enums/case-priority.enum';
import { CaseStatus } from 'src/modules/case/enums/case-status.enum';
import { CaseType } from 'src/modules/case/enums/case-type.enum';

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

  static toDomain({
    id,
    createdById,
    title,
    description,
    priority,
    status,
    type,
    createdAt,
    updatedAt,
  }: PrismaCase): Case {
    return new Case(
      {
        createdById,
        title,
        description,
        priority: priority as CasePriority,
        status: status as CaseStatus,
        type: type as CaseType,
        createdAt,
        updatedAt,
      },
      id,
    );
  }
}
