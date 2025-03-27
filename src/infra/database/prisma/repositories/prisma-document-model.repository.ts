import { Injectable } from '@nestjs/common';
import { DocumentModelRepository } from 'src/modules/document-model/repositories/document-model.repository';
import { PrismaService } from '../prisma.service';
import { DocumentModel } from 'src/modules/document-model/entities/document-model.entity';
import { PrismaDocumentModelMapper } from '../mappers/prisma-document-model.mapper';

@Injectable()
export class PrismaDocumentModelRepository implements DocumentModelRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async create(documentModel: DocumentModel): Promise<void> {
    const prismaDocumentModel =
      PrismaDocumentModelMapper.toPrisma(documentModel);
    await this.prismaService.documentModels.create({
      data: prismaDocumentModel,
    });
  }

  async getLawyerDocumentModels(lawyerId: string): Promise<DocumentModel[]> {
    const prismaDocumentModels =
      await this.prismaService.documentModels.findMany({
        where: {
          ownerId: lawyerId,
        },
      });

    return prismaDocumentModels.map(PrismaDocumentModelMapper.toDomain);
  }

  async getDocumentModelById(id: string): Promise<DocumentModel | null> {
    const prismaDocumentModel =
      await this.prismaService.documentModels.findUnique({
        where: {
          id,
        },
      });

    if (!prismaDocumentModel) return null;

    return PrismaDocumentModelMapper.toDomain(prismaDocumentModel);
  }

  async delete(id: string): Promise<void> {
    await this.prismaService.documentModels.delete({
      where: { id },
    });
  }
}
