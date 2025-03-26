import { Injectable } from '@nestjs/common';
import { DocumentModelFileRepository } from 'src/modules/document-model-file/repositories/document-model-file.repository';
import { PrismaService } from '../prisma.service';
import { DocumentModelFile } from 'src/modules/document-model-file/entities/document-model-file.entity';
import { PrismaDocumentModelFileMapper } from '../mappers/prisma-document-model-file.mapper';

@Injectable()
export class PrismaDocumentModelFileRepository
  implements DocumentModelFileRepository
{
  constructor(private readonly prismaService: PrismaService) {}

  async create(documentModelFile: DocumentModelFile): Promise<void> {
    const prismaDocumentModelFile =
      PrismaDocumentModelFileMapper.toPrisma(documentModelFile);
    await this.prismaService.documentModelFiles.create({
      data: prismaDocumentModelFile,
    });
  }

  async getDocumentModelFiles(
    documentModelId: string,
  ): Promise<DocumentModelFile[]> {
    const prismaDocumentModelFiles =
      await this.prismaService.documentModelFiles.findMany({
        where: { documentModelId },
      });
    return prismaDocumentModelFiles.map(PrismaDocumentModelFileMapper.toDomain);
  }
}
