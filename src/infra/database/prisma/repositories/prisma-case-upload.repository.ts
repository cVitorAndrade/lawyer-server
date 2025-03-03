import { Injectable } from '@nestjs/common';
import { CaseUpload } from 'src/modules/case-upload/entities/case-upload.entity';
import { CaseUploadRepository } from 'src/modules/case-upload/repositories/case-upload.repository';
import { PrismaCaseUploadMapper } from '../mappers/prisma-case-upload.mapper';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PrismaCaseUploadRepository implements CaseUploadRepository {
  constructor(private prismaService: PrismaService) {}

  async create(caseUpload: CaseUpload): Promise<void> {
    const prismaCaseUpload = PrismaCaseUploadMapper.toPrisma(caseUpload);
    await this.prismaService.caseUploads.create({
      data: prismaCaseUpload,
    });
  }
}
