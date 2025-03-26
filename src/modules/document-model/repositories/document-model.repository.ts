import { DocumentModel } from '../entities/document-model.entity';

export abstract class DocumentModelRepository {
  abstract create(documentModel: DocumentModel): Promise<void>;
  abstract getLawyerDocumentModels(lawyerId: string): Promise<DocumentModel[]>;
  abstract getDocumentModelById(id: string): Promise<DocumentModel | null>;
}
