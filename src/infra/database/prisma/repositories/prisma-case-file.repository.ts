import { Injectable } from '@nestjs/common';
import { CaseFile } from 'src/modules/case-files/entities/case-file.entity';
import { CaseFileRepository } from 'src/modules/case-files/repositories/case-file.repository';
import { PrismaCaseFileMapper } from '../mappers/prisma-case-file.mapper';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PrismaCaseFileRepository implements CaseFileRepository {
  constructor(private prismaService: PrismaService) {}

  async create(caseFile: CaseFile): Promise<void> {
    const prismaCaseFile = PrismaCaseFileMapper.toPrisma(caseFile);
    await this.prismaService.caseFiles.create({
      data: prismaCaseFile,
    });
  }
}
