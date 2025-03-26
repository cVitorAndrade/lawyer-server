import { DocumentModels as PrismaDocumentModel } from '@prisma/client';
import { DocumentModel } from 'src/modules/document-model/entities/document-model.entity';

export class PrismaDocumentModelMapper {
  static toPrisma({
    id,
    ownerId,
    title,
    description,
    color,
    createdAt,
  }: DocumentModel): PrismaDocumentModel {
    return {
      id,
      ownerId,
      title,
      description,
      color,
      createdAt,
    };
  }

  static toDomain({
    id,
    ownerId,
    title,
    description,
    color,
    createdAt,
  }: PrismaDocumentModel): DocumentModel {
    return new DocumentModel(
      {
        ownerId,
        title,
        description,
        createdAt,
        color,
      },
      id,
    );
  }
}
