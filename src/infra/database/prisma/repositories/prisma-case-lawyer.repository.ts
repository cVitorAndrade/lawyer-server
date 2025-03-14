import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CaseLawyerRepository } from 'src/modules/case-lawyer/repositories/case-lawyer.repository';
import { CaseLawyer } from 'src/modules/case-lawyer/entities/case-lawyer.entity';
import { PrismaCaseLawyerMapper } from '../mappers/prisma-case-lawyer.mapper';

@Injectable()
export class PrismaCaseLawyerRepository implements CaseLawyerRepository {
  constructor(private prismaService: PrismaService) {}

  async createCaseLawyer(caseLawyer: CaseLawyer): Promise<void> {
    const prismaCaseLawyer = PrismaCaseLawyerMapper.toPrisma(caseLawyer);
    await this.prismaService.caseLawyers.create({
      data: prismaCaseLawyer,
    });
  }
}
