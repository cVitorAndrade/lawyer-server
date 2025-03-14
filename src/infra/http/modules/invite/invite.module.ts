import { Module } from '@nestjs/common';
import { InviteController } from './invite.controller';
import { DatabaseModule } from 'src/infra/database/database.module';
import { CreateInviteUseCase } from 'src/modules/invite/use-cases/create-invite.use-case';
import { CreateNotificationUseCase } from 'src/modules/notification/use-cases/create-notification.use-case';
import { GetAllLawyerInvitesUseCase } from 'src/modules/invite/use-cases/get-all-lawyer-invites.use-case';
import { AcceptCaseInvitationUseCase } from 'src/modules/invite/use-cases/accept-case-invitation.use-case';
import { CreateCaseLawyerUseCase } from 'src/modules/case-lawyer/use-cases/create-case-lawyer.use-case';
import { RejectCaseInvitationUseCase } from 'src/modules/invite/use-cases/reject-case-invitation.use-case';

@Module({
  providers: [
    CreateInviteUseCase,
    CreateNotificationUseCase,
    GetAllLawyerInvitesUseCase,
    AcceptCaseInvitationUseCase,
    CreateCaseLawyerUseCase,
    RejectCaseInvitationUseCase,
  ],
  controllers: [InviteController],
  imports: [DatabaseModule],
})
export class InviteModule {}
