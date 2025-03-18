import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { LawyerRepository } from 'src/modules/lawyer/repositories/lawyer.repository';
import { PrismaLawyerRepository } from './prisma/repositories/prisma-lawyer.repository';
import { PrismaCaseRepository } from './prisma/repositories/prisma-case.repository';
import { CaseRepository } from 'src/modules/cases/repositories/case.repository';
import { CaseFileRepository } from 'src/modules/case-files/repositories/case-file.repository';
import { PrismaCaseFileRepository } from './prisma/repositories/prisma-case-file.repository';
import { CaseLawyerRepository } from 'src/modules/case-lawyer/repositories/case-lawyer.repository';
import { PrismaCaseLawyerRepository } from './prisma/repositories/prisma-case-lawyer.repository';
import { NotificationRepository } from 'src/modules/notification/repositories/notification.repository';
import { PrismaNotificationRepository } from './prisma/repositories/prisma-notification.repository';
import { InviteRepository } from 'src/modules/invite/repositories/invite.repository';
import { PrismaInviteRepository } from './prisma/repositories/prisma-invite.repository';
import { ClientRepository } from 'src/modules/client/repositories/client.repository';
import { PrismaClientRepository } from './prisma/repositories/prisma-client.repository';

@Module({
  providers: [
    PrismaService,
    {
      provide: LawyerRepository,
      useClass: PrismaLawyerRepository,
    },
    {
      provide: CaseRepository,
      useClass: PrismaCaseRepository,
    },
    {
      provide: CaseFileRepository,
      useClass: PrismaCaseFileRepository,
    },
    {
      provide: CaseLawyerRepository,
      useClass: PrismaCaseLawyerRepository,
    },
    {
      provide: NotificationRepository,
      useClass: PrismaNotificationRepository,
    },
    {
      provide: InviteRepository,
      useClass: PrismaInviteRepository,
    },
    {
      provide: ClientRepository,
      useClass: PrismaClientRepository,
    },
  ],
  exports: [
    LawyerRepository,
    CaseRepository,
    CaseFileRepository,
    CaseLawyerRepository,
    NotificationRepository,
    InviteRepository,
    ClientRepository,
  ],
})
export class DatabaseModule {}
