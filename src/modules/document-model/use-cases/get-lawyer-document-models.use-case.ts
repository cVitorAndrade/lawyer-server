import { Injectable } from '@nestjs/common';
import { DocumentModelRepository } from '../repositories/document-model.repository';

interface GetLawyerDocumentModelRequest {
  lawyerId: string;
}

@Injectable()
export class GetLawyerDocumentModelUseCase {
  constructor(
    private readonly documentModelRepository: DocumentModelRepository,
  ) {}

  async execute({ lawyerId }: GetLawyerDocumentModelRequest) {
    const documentModels =
      this.documentModelRepository.getLawyerDocumentModels(lawyerId);
    return documentModels;
  }
}
