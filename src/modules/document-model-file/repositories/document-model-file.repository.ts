import { DocumentModelFile } from '../entities/document-model-file.entity';

export abstract class DocumentModelFileRepository {
  abstract create(documentModelFile: DocumentModelFile): Promise<void>;
  abstract getDocumentModelFiles(
    documentModelId: string,
  ): Promise<DocumentModelFile[]>;
  abstract findById(id: string): Promise<DocumentModelFile | null>;
  abstract delete(id: string): Promise<void>;
}
