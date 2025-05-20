import { ClientFiles as PrismaClientFile } from '@prisma/client';
import { ClientFile } from 'src/modules/client-file/entities/client-file.entity';

export class PrismaClientFileMapper {
  static toPrisma({
    id,
    clientId,
    createdAt,
    fullpath,
    mimetype,
    originalname,
    path,
    size,
    uploadedById,
  }: ClientFile): PrismaClientFile {
    return {
      id,
      clientId,
      createdAt,
      fullpath,
      mimetype,
      originalname,
      path,
      size,
      uploadedById,
    };
  }

  static toDomain({
    id,
    clientId,
    createdAt,
    fullpath,
    mimetype,
    originalname,
    path,
    size,
    uploadedById,
  }: PrismaClientFile) {
    return new ClientFile(
      {
        clientId,
        createdAt,
        fullpath,
        mimetype,
        originalname,
        path,
        size,
        uploadedById,
      },
      id,
    );
  }
}
