import { Injectable } from '@nestjs/common';
import { UpdateLawyerUseCase } from './update-lawyer.use-case';
import { GetLawyerByIdUseCase } from './get-lawyer-by-id.use-case';
import { UploadRepository } from 'src/modules/upload/repositories/upload.repository';

interface DeleteLawyerAvatarImageRequest {
  lawyerId: string;
}

@Injectable()
export class DeleteLawyerAvatarImageUseCase {
  constructor(
    private updateLawyerUseCase: UpdateLawyerUseCase,
    private getLawyerByIdUseCase: GetLawyerByIdUseCase,
    private uploadRepository: UploadRepository,
  ) {}

  async execute({ lawyerId }: DeleteLawyerAvatarImageRequest) {
    const lawyer = await this.getLawyerByIdUseCase.execute({ lawyerId });

    await this.uploadRepository.deleteLawyerAvatar(lawyer.avatar);

    lawyer.avatar = null;

    await this.updateLawyerUseCase.execute({
      lawyerId,
      avatar: lawyer.avatar,
    });

    return lawyer;
  }
}
