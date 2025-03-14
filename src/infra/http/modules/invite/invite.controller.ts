import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Request,
} from '@nestjs/common';
import { CreateInviteDto } from './dtos/create-invite.dto';
import { AuthenticatedRequestModel } from '../auth/models/authenticated-request.model';
import { CreateInviteUseCase } from 'src/modules/invite/use-cases/create-invite.use-case';
import { InviteViewModel } from './view-model/invite.view-model';
import { CreateNotificationUseCase } from 'src/modules/notification/use-cases/create-notification.use-case';
import { GetAllLawyerInvitesUseCase } from 'src/modules/invite/use-cases/get-all-lawyer-invites.use-case';
import { AcceptCaseInvitationUseCase } from 'src/modules/invite/use-cases/accept-case-invitation.use-case';
import { CreateCaseLawyerUseCase } from 'src/modules/case-lawyer/use-cases/create-case-lawyer.use-case';
import { RejectCaseInvitationUseCase } from 'src/modules/invite/use-cases/reject-case-invitation.use-case';

@Controller('invite')
export class InviteController {
  constructor(
    private readonly createInviteUseCase: CreateInviteUseCase,
    private readonly createNotificationUseCase: CreateNotificationUseCase,
    private readonly getAllLawyerInvitesUseCase: GetAllLawyerInvitesUseCase,
    private readonly acceptCaseInvitationUseCase: AcceptCaseInvitationUseCase,
    private readonly rejectCaseInvitationUseCase: RejectCaseInvitationUseCase,
    private readonly createCaseLawyerUseCase: CreateCaseLawyerUseCase,
  ) {}

  @Post()
  async createInvites(
    @Request() request: AuthenticatedRequestModel,
    @Body() body: CreateInviteDto,
  ) {
    const { user } = request;
    const { caseId, lawyers } = body;

    const inviteLawyers = lawyers.map((lawyer) =>
      this.createInviteUseCase.execute({
        caseId,
        invitedById: user.id,
        invitedId: lawyer.id,
      }),
    );

    const invites = await Promise.all(inviteLawyers);

    const createNotifications = invites.map((invite) =>
      this.createNotificationUseCase.execute({
        lawyerId: invite.invitedId,
        type: 'invite',
        message: 'invited you to',
        details: {
          caseId,
          invitedById: user.id,
          inviteId: invite.id,
        },
      }),
    );

    await Promise.all(createNotifications);

    return invites.map((invite) => InviteViewModel.toHttp(invite));
  }

  @Patch('accept/:id')
  async acceptCaseInvitation(@Param('id') id: string) {
    const invite = await this.acceptCaseInvitationUseCase.execute({
      inviteId: id,
    });

    await this.createCaseLawyerUseCase.execute({
      caseId: invite.caseId,
      lawyerId: invite.invitedId,
    });

    return InviteViewModel.toHttp(invite);
  }

  @Patch('reject/:id')
  async rejectCaseInvitation(@Param('id') id: string) {
    const invite = await this.rejectCaseInvitationUseCase.execute({
      inviteId: id,
    });

    return InviteViewModel.toHttp(invite);
  }

  @Get('lawyer')
  async getAllLawyerInvites(@Request() request: AuthenticatedRequestModel) {
    const { user } = request;
    const invites = await this.getAllLawyerInvitesUseCase.execute({
      lawyerId: user.id,
    });

    return invites.map((invite) => InviteViewModel.toHttp(invite));
  }
}
