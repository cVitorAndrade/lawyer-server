import { Controller, Get, Request } from '@nestjs/common';
import { GetAllLawyerNotificationsUseCase } from 'src/modules/notification/use-cases/get-all-lawyer-notifications.use-case';
import { AuthenticatedRequestModel } from '../auth/models/authenticated-request.model';
import { NotificationViewModel } from './view-model/notification.view-model';

@Controller('notification')
export class NotificationController {
  constructor(
    private readonly getAllLawyerNotificationsUseCase: GetAllLawyerNotificationsUseCase,
  ) {}

  @Get('lawyer')
  async getAllLawyerNotifications(
    @Request() request: AuthenticatedRequestModel,
  ) {
    const { user } = request;
    const notifications = await this.getAllLawyerNotificationsUseCase.execute({
      lawyerId: user.id,
    });

    return notifications.map((notification) =>
      NotificationViewModel.toHttp(notification),
    );
  }
}
