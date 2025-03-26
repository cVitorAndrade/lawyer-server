import { Injectable, NotFoundException } from '@nestjs/common';
import { DocumentModelRepository } from '../repositories/document-model.repository';

interface GetDocumentModelByIdRequest {
  documentModelId: string;
}

@Injectable()
export class GetDocumentModelByIdUseCase {
  constructor(
    private readonly documentModelRepository: DocumentModelRepository,
  ) {}

  async execute({ documentModelId }: GetDocumentModelByIdRequest) {
    const documentModel =
      await this.documentModelRepository.getDocumentModelById(documentModelId);
    if (!documentModel) throw new NotFoundException();

    return documentModel;
  }
}
