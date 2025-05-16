import { Injectable } from '@nestjs/common';
import { CaseClientRepository } from 'src/modules/case-client/repositories/case-client.repository';
import { PrismaService } from '../prisma.service';
import { CaseClient } from 'src/modules/case-client/entities/case-client.entity';
import { PrismaCaseClientMapper } from '../mappers/prisma-case-client.mapper';
import { Client } from 'src/modules/client/entities/client.entity';
import { PrismaClientMapper } from '../mappers/prisma-client.mapper';
import { Case } from 'src/modules/case/entities/case.entity';
import { PrismaCaseMapper } from '../mappers/prisma-case.mapper';

@Injectable()
export class PrismaCaseClientRepository implements CaseClientRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async create(caseClient: CaseClient): Promise<void> {
    const prismaCaseClient = PrismaCaseClientMapper.toPrisma(caseClient);
    await this.prismaService.caseClients.create({
      data: prismaCaseClient,
    });
  }

  async getAllCaseClients(caseId: string): Promise<Client[]> {
    const prismaCaseClients = await this.prismaService.caseClients.findMany({
      where: { caseId },
      include: { client: true },
    });

    return prismaCaseClients.map(({ client }) =>
      PrismaClientMapper.toDomain(client),
    );
  }

  async findAllCasesByClientId(clientId: string): Promise<Case[]> {
    const prismaCaseClients = await this.prismaService.caseClients.findMany({
      where: { clientId },
      include: { case: true },
    });

    return prismaCaseClients.map(({ case: caseEntity }) =>
      PrismaCaseMapper.toDomain(caseEntity),
    );
  }
}
