import { Module } from '@nestjs/common';
import { GetAllLawyerNotificationsUseCase } from 'src/modules/notification/use-cases/get-all-lawyer-notifications.use-case';
import { NotificationController } from './notification.controller';
import { DatabaseModule } from 'src/infra/database/database.module';

@Module({
  providers: [GetAllLawyerNotificationsUseCase],
  controllers: [NotificationController],
  imports: [DatabaseModule],
})
export class NotificationModule {}
