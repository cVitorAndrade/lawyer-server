import { DocumentModelFiles as PrismaDocumentModelFile } from '@prisma/client';
import { DocumentModelFile } from 'src/modules/document-model-file/entities/document-model-file.entity';

export class PrismaDocumentModelFileMapper {
  static toPrisma({
    id,
    documentModelId,
    uploadedById,
    fullpath,
    path,
    mimetype,
    originalname,
    size,
    createdAt,
  }: DocumentModelFile): PrismaDocumentModelFile {
    return {
      id,
      documentModelId,
      uploadedById,
      fullpath,
      path,
      mimetype,
      originalname,
      size,
      createdAt,
    };
  }

  static toDomain({
    id,
    documentModelId,
    uploadedById,
    fullpath,
    path,
    originalname,
    mimetype,
    size,
    createdAt,
  }: PrismaDocumentModelFile): DocumentModelFile {
    return new DocumentModelFile(
      {
        documentModelId,
        uploadedById,
        fullpath,
        path,
        originalname,
        mimetype,
        size,
        createdAt,
      },
      id,
    );
  }
}
