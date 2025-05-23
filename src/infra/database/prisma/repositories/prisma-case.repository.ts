import { Injectable } from '@nestjs/common';
import { CaseRepository } from 'src/modules/case/repositories/case.repository';
import { PrismaService } from '../prisma.service';
import { Case } from 'src/modules/case/entities/case.entity';
import { PrismaCaseMapper } from '../mappers/prisma-case.mapper';

@Injectable()
export class PrismaCaseRepository implements CaseRepository {
  constructor(private prismaService: PrismaService) {}

  async create(caseEntity: Case): Promise<void> {
    const prismaCase = PrismaCaseMapper.toPrisma(caseEntity);
    await this.prismaService.cases.create({
      data: prismaCase,
    });
  }

  async getAllCases(): Promise<Case[]> {
    const prismaCases = await this.prismaService.cases.findMany({
      where: { isDeleted: false },
    });
    return prismaCases.map((prismaCase) =>
      PrismaCaseMapper.toDomain(prismaCase),
    );
  }

  async getAllCasesByLawyerId(lawyerId: string): Promise<Case[]> {
    const prismaCases = await this.prismaService.cases.findMany({
      where: {
        createdById: lawyerId,
        isDeleted: false,
      },
    });

    return prismaCases.map((prismaCase) =>
      PrismaCaseMapper.toDomain(prismaCase),
    );
  }

  async getCaseById(id: string): Promise<Case | null> {
    const prismaCase = await this.prismaService.cases.findFirst({
      where: { id, isDeleted: false },
    });
    if (!prismaCase) return null;

    return PrismaCaseMapper.toDomain(prismaCase);
  }

  async delete(id: string): Promise<void> {
    await this.prismaService.cases.update({
      data: { isDeleted: true },
      where: { id },
    });
  }
}
