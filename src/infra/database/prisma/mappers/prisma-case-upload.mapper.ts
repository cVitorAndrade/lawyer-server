import { CaseUploads as PrismaCaseUpload } from '@prisma/client';
import { CaseUpload } from 'src/modules/case-upload/entities/case-upload.entity';

export class PrismaCaseUploadMapper {
  static toPrisma({
    id,
    uploadedById,
    caseId,
    path,
    fullpath,
    createdAt,
  }: CaseUpload): PrismaCaseUpload {
    return {
      id,
      uploadedById,
      caseId,
      path,
      fullpath,
      createdAt,
    };
  }
}
