import { Module } from '@nestjs/common';
import { LawyerController } from './lawyer.controller';
import { CreateLawyerUseCase } from 'src/modules/lawyer/use-cases/create-lawyer.use-case';
import { DatabaseModule } from 'src/infra/database/database.module';
import { GetLawyerByIdUseCase } from 'src/modules/lawyer/use-cases/get-lawyer-by-id.use-case';
import { UpdateLawyerUseCase } from 'src/modules/lawyer/use-cases/update-lawyer.use-case';
import { UpdateLawyerAvatarUseCase } from 'src/modules/lawyer/use-cases/update-lawyer-avatar.use-case';
import { StorageModule } from 'src/infra/storage/storage.module';
import { DeleteLawyerAvatarImageUseCase } from 'src/modules/lawyer/use-cases/delete-lawyer-avatar-image.use-case';

@Module({
  imports: [DatabaseModule, StorageModule],
  controllers: [LawyerController],
  providers: [
    CreateLawyerUseCase,
    GetLawyerByIdUseCase,
    UpdateLawyerUseCase,
    UpdateLawyerAvatarUseCase,
    DeleteLawyerAvatarImageUseCase,
  ],
})
export class LawyerModule {}
