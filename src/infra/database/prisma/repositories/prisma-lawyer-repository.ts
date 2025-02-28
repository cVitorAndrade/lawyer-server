import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { LawyerRepository } from 'src/modules/lawyer/repositories/lawyer.repository';
import { Lawyer } from 'src/modules/lawyer/entities/lawyer.entity';
import { PrismaLawyerMapper } from '../mappers/prisma-lawyer.mapper';

@Injectable()
export class PrismaLawyerRepository implements LawyerRepository {
  constructor(private prismaService: PrismaService) {}

  async create(lawyer: Lawyer): Promise<void> {
    const prismaLawyer = PrismaLawyerMapper.toPrisma(lawyer);
    await this.prismaService.lawyers.create({
      data: prismaLawyer,
    });
  }
}
