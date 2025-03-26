import { DocumentModel } from 'src/modules/document-model/entities/document-model.entity';

export class DocumentModelViewModel {
  static toHttp({
    id,
    ownerId,
    title,
    description,
    color,
    createdAt,
  }: DocumentModel) {
    return { id, ownerId, title, description, color, createdAt };
  }
}
