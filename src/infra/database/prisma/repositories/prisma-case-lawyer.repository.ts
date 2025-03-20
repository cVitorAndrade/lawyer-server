import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CaseLawyerRepository } from 'src/modules/case-lawyer/repositories/case-lawyer.repository';
import { CaseLawyer } from 'src/modules/case-lawyer/entities/case-lawyer.entity';
import { PrismaCaseLawyerMapper } from '../mappers/prisma-case-lawyer.mapper';
import { PrismaLawyerMapper } from '../mappers/prisma-lawyer.mapper';
import { Case } from 'src/modules/cases/entities/case.entity';
import { Lawyer } from 'src/modules/lawyer/entities/lawyer.entity';
import { PrismaCaseMapper } from '../mappers/prisma-case.mapper';

@Injectable()
export class PrismaCaseLawyerRepository implements CaseLawyerRepository {
  constructor(private prismaService: PrismaService) {}

  async createCaseLawyer(caseLawyer: CaseLawyer): Promise<void> {
    const prismaCaseLawyer = PrismaCaseLawyerMapper.toPrisma(caseLawyer);
    await this.prismaService.caseLawyers.create({
      data: prismaCaseLawyer,
    });
  }

  async getAllCaseLawyers(caseId: string): Promise<Lawyer[]> {
    const prismaCaseLawyers = await this.prismaService.caseLawyers.findMany({
      where: { caseId },
      include: { lawyer: true },
    });

    return prismaCaseLawyers.map(({ lawyer }) =>
      PrismaLawyerMapper.toDomain(lawyer),
    );
  }

  async getAllLawyerCases(lawyerId: string): Promise<Case[]> {
    const prismaCaseLawyers = await this.prismaService.caseLawyers.findMany({
      where: { lawyerId },
      include: { case: true },
    });

    return prismaCaseLawyers.map(({ case: caseEntity }) =>
      PrismaCaseMapper.toDomain(caseEntity),
    );
  }
}
