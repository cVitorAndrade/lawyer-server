import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { DocumentModelRepository } from 'src/modules/document-model/repositories/document-model.repository';
import { UploadRepository } from 'src/modules/upload/repositories/upload.repository';

interface DownloadAllDocumentModelFilesRequest {
  documentModelId: string;
  lawyerId: string;
}

@Injectable()
export class DownloadAllDocumentModelFilesUseCase {
  constructor(
    private readonly uploadRepository: UploadRepository,
    private readonly documentModelRepository: DocumentModelRepository,
  ) {}

  async execute({
    documentModelId,
    lawyerId,
  }: DownloadAllDocumentModelFilesRequest) {
    const documentModel =
      await this.documentModelRepository.getDocumentModelById(documentModelId);
    if (!documentModel) throw new NotFoundException();

    const isOwner = documentModel.ownerId === lawyerId;
    if (!isOwner) throw new UnauthorizedException();

    const documentModelFiles =
      await this.uploadRepository.downloadAllFolderFiles(
        'document-models',
        documentModelId,
      );
    return documentModelFiles;
  }
}
