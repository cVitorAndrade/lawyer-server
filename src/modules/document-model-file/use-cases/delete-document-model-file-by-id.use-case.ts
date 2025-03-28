import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { DocumentModelFileRepository } from '../repositories/document-model-file.repository';
import { UploadRepository } from 'src/modules/upload/repositories/upload.repository';

interface DeleteDocumenModelFileByIdRequest {
  documentModelFileId: string;
  lawyerId: string;
}

@Injectable()
export class DeleteDocumenModelFileByIdUseCase {
  constructor(
    private readonly documentModelFileRepository: DocumentModelFileRepository,
    private readonly uploadRepository: UploadRepository,
  ) {}

  async execute({
    documentModelFileId,
    lawyerId,
  }: DeleteDocumenModelFileByIdRequest) {
    const documentModelFile =
      await this.documentModelFileRepository.findById(documentModelFileId);
    if (!documentModelFile) throw new NotFoundException();

    const isOwner = documentModelFile.uploadedById === lawyerId;
    if (!isOwner) throw new UnauthorizedException();

    const { path } = documentModelFile;
    await this.uploadRepository.deleteFile('document-models', path);
    await this.documentModelFileRepository.delete(documentModelFileId);
  }
}
