import { CaseFile } from 'src/modules/case-file/entities/case-file.entity';

export class CaseFileViewModel {
  static toHttp({
    id,
    caseId,
    uploadedById,
    fullpath,
    path,
    mimetype,
    originalname,
    size,
    createdAt,
  }: CaseFile) {
    return {
      id,
      caseId,
      uploadedById,
      fullpath,
      path,
      mimetype,
      originalname,
      size,
      createdAt,
    };
  }
}
