import { CaseFiles as PrismaCaseFile } from '@prisma/client';
import { CaseFile } from 'src/modules/case-file/entities/case-file.entity';

export class PrismaCaseFileMapper {
  static toPrisma({
    id,
    uploadedById,
    caseId,
    path,
    fullpath,
    mimetype,
    originalname,
    size,
    createdAt,
  }: CaseFile): PrismaCaseFile {
    return {
      id,
      uploadedById,
      caseId,
      path,
      fullpath,
      mimetype,
      originalname,
      size,
      createdAt,
    };
  }

  static toDomain({
    id,
    caseId,
    uploadedById,
    fullpath,
    path,
    mimetype,
    originalname,
    size,
    createdAt,
  }: PrismaCaseFile): CaseFile {
    return new CaseFile(
      {
        caseId,
        uploadedById,
        fullpath,
        path,
        mimetype,
        originalname,
        size,
        createdAt,
      },
      id,
    );
  }
}
