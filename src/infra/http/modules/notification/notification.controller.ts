import { Controller, Get, Request } from '@nestjs/common';
import { GetAllLawyerNotificationsUseCase } from 'src/modules/notification/use-cases/get-all-lawyer-notifications.use-case';
import { AuthenticatedRequestModel } from '../auth/models/authenticated-request.model';
import { NotificationViewModel } from './view-model/notification.view-model';
import { GetLawyerByIdUseCase } from 'src/modules/lawyer/use-cases/get-lawyer-by-id.use-case';
import { GetCaseByIdUseCase } from 'src/modules/case/use-cases/get-case-by-id.use-case';
import { InviteNotificationDetails } from 'src/modules/notification/types/invite-notification.type';
import { GetInviteByIdUseCase } from 'src/modules/invite/use-cases/get-invite-by-id.use-case';
import { LawyerViewModel } from '../lawyer/view-model/lawyer.view-model';
import { CaseViewModel } from '../case/view-model/case.view-model';
import { InviteViewModel } from '../invite/view-model/invite.view-model';

@Controller('notification')
export class NotificationController {
  constructor(
    private readonly getAllLawyerNotificationsUseCase: GetAllLawyerNotificationsUseCase,
    private readonly getLawyerByIdUseCase: GetLawyerByIdUseCase,
    private readonly getCaseByIdUseCase: GetCaseByIdUseCase,
    private readonly getInviteByIdUseCase: GetInviteByIdUseCase,
  ) {}

  @Get('lawyer')
  async getAllLawyerNotifications(
    @Request() request: AuthenticatedRequestModel,
  ) {
    const { user } = request;
    const notifications = await this.getAllLawyerNotificationsUseCase.execute({
      lawyerId: user.id,
    });

    return Promise.all(
      notifications.map(async (notification) => {
        const isInviteNotification = notification.type === 'invite';
        if (isInviteNotification) {
          const { caseId, invitedById, inviteId } =
            notification.details as InviteNotificationDetails;
          const [inviter, caseEntity, invite] = await Promise.all([
            this.getLawyerByIdUseCase.execute({
              lawyerId: invitedById,
            }),
            this.getCaseByIdUseCase.execute({
              caseId,
            }),
            this.getInviteByIdUseCase.execute({
              inviteId,
              ownerId: user.id,
            }),
          ]);

          return {
            ...NotificationViewModel.toHttp(notification),
            details: {
              ...notification.details,
              inviter: LawyerViewModel.toHttp(inviter),
              case: CaseViewModel.toHttp(caseEntity),
              invite: InviteViewModel.toHttp(invite),
            },
          };
        }
      }),
    );
  }
}
