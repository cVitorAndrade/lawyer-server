import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { CaseRepository } from '../repositories/case.repository';

interface DeleteCaseByIdRequest {
  caseId: string;
  lawyerId: string;
}

@Injectable()
export class DeleteCaseByIdUseCase {
  constructor(private readonly caseRepository: CaseRepository) {}

  async execute({ caseId, lawyerId }: DeleteCaseByIdRequest) {
    const caseEntity = await this.caseRepository.getCaseById(caseId);
    if (!caseEntity) throw new NotFoundException();

    const isOwner = caseEntity.createdById === lawyerId;
    if (!isOwner) throw new UnauthorizedException();

    await this.caseRepository.delete(caseId);
  }
}
