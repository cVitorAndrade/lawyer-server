import { Injectable } from '@nestjs/common';
import { CaseClientRepository } from 'src/modules/case-client/repositories/case-client.repository';
import { PrismaService } from '../prisma.service';
import { CaseClient } from 'src/modules/case-client/entities/case-client.entity';
import { PrismaCaseClientMapper } from '../mappers/prisma-case-client.mapper';

@Injectable()
export class PrismaCaseClientRepository implements CaseClientRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async create(caseClient: CaseClient): Promise<void> {
    const prismaCaseClient = PrismaCaseClientMapper.toPrisma(caseClient);
    await this.prismaService.caseClients.create({
      data: prismaCaseClient,
    });
  }
}
