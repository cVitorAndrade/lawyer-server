import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { DocumentModelRepository } from '../repositories/document-model.repository';

interface DeleteDocumentModelRequest {
  documentModelId: string;
  lawyerId: string;
}

@Injectable()
export class DeleteDocumentModelUseCase {
  constructor(
    private readonly documentModelRepository: DocumentModelRepository,
  ) {}

  async execute({ documentModelId, lawyerId }: DeleteDocumentModelRequest) {
    const documentModel =
      await this.documentModelRepository.getDocumentModelById(documentModelId);
    if (!documentModel) throw new NotFoundException();

    const isOwner = documentModel.ownerId === lawyerId;
    if (!isOwner) throw new UnauthorizedException();

    await this.documentModelRepository.delete(documentModelId);
  }
}
