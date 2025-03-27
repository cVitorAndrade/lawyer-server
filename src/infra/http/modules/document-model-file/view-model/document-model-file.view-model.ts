import { DocumentModelFile } from 'src/modules/document-model-file/entities/document-model-file.entity';

export class DocumentModelFileViewModel {
  static toHttp({
    id,
    documentModelId,
    uploadedById,
    originalname,
    fullpath,
    path,
    mimetype,
    size,
    createdAt,
  }: DocumentModelFile) {
    return {
      id,
      documentModelId,
      uploadedById,
      originalname,
      fullpath,
      path,
      mimetype,
      size,
      createdAt,
    };
  }
}
