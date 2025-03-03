import { CaseUpload } from 'src/modules/case-upload/entities/case-upload.entity';

export class CaseUploadViewModel {
  static toHttp({
    id,
    caseId,
    uploadedById,
    fullpath,
    path,
    createdAt,
  }: CaseUpload) {
    return {
      id,
      caseId,
      uploadedById,
      fullpath,
      path,
      createdAt,
    };
  }
}
