import { DependentRepository } from 'src/modules/dependent/repositories/dependent.repository';
import { PrismaService } from '../prisma.service';
import { Dependent } from 'src/modules/dependent/entities/dependent.entity';
import { Injectable } from '@nestjs/common';
import { PrismaDependentMapper } from '../mappers/prisma-dependent.mapper';

@Injectable()
export class PrismaDependentRepository implements DependentRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async create(dependent: Dependent): Promise<void> {
    const prismaDependent = PrismaDependentMapper.toPrisma(dependent);
    await this.prismaService.dependents.create({
      data: prismaDependent,
    });
  }

  async findAllByClientId(clientId: string): Promise<Dependent[]> {
    const prismaDependents = await this.prismaService.dependents.findMany({
      where: {
        clientId,
      },
    });

    return prismaDependents.map(PrismaDependentMapper.toDomain);
  }
}
