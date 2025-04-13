import { Module } from '@nestjs/common';
import { GetAllLawyerNotificationsUseCase } from 'src/modules/notification/use-cases/get-all-lawyer-notifications.use-case';
import { NotificationController } from './notification.controller';
import { DatabaseModule } from 'src/infra/database/database.module';
import { GetLawyerByIdUseCase } from 'src/modules/lawyer/use-cases/get-lawyer-by-id.use-case';
import { GetCaseByIdUseCase } from 'src/modules/case/use-cases/get-case-by-id.use-case';
import { GetInviteByIdUseCase } from 'src/modules/invite/use-cases/get-invite-by-id.use-case';

@Module({
  providers: [
    GetAllLawyerNotificationsUseCase,
    GetLawyerByIdUseCase,
    GetCaseByIdUseCase,
    GetInviteByIdUseCase,
  ],
  controllers: [NotificationController],
  imports: [DatabaseModule],
})
export class NotificationModule {}
