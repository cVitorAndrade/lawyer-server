import { Injectable } from '@nestjs/common';
import { UploadFileDto } from 'src/infra/http/modules/upload/dtos/upload-file.dto';
import { UploadRepository } from 'src/modules/upload/repositories/upload.repository';
import { GetLawyerByIdUseCase } from './get-lawyer-by-id.use-case';
import { UpdateLawyerUseCase } from './update-lawyer.use-case';
import { DeleteLawyerAvatarImageUseCase } from './delete-lawyer-avatar-image.use-case';

interface UpdateLawyerAvatarRequest {
  lawyerId: string;
  file: UploadFileDto;
}

@Injectable()
export class UpdateLawyerAvatarUseCase {
  constructor(
    private uploadRepository: UploadRepository,
    private getLawyerByIdUseCase: GetLawyerByIdUseCase,
    private updateLawyerUseCase: UpdateLawyerUseCase,
    private deleteLawyerAvatarUseCase: DeleteLawyerAvatarImageUseCase,
  ) {}

  async execute({ file, lawyerId }: UpdateLawyerAvatarRequest) {
    const lawyer = await this.getLawyerByIdUseCase.execute({ lawyerId });

    const hasAvatar = lawyer.avatar;
    if (hasAvatar) {
      await this.deleteLawyerAvatarUseCase.execute({ lawyerId });
    }

    const uploadedAvatarFile =
      await this.uploadRepository.updateLawyerAvatar(file);

    lawyer.avatar = uploadedAvatarFile.path;

    await this.updateLawyerUseCase.execute({
      lawyerId,
      avatar: lawyer.avatar,
    });

    return lawyer;
  }
}
