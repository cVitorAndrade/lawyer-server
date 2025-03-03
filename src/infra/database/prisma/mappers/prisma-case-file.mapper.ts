import { CaseFiles as PrismaCaseFile } from '@prisma/client';
import { CaseFile } from 'src/modules/case-files/entities/case-file.entity';

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
}
