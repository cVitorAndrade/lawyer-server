import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { LawyerRepository } from 'src/modules/lawyer/repositories/lawyer.repository';
import { PrismaLawyerRepository } from './prisma/repositories/prisma-lawyer.repository';
import { PrismaCaseRepository } from './prisma/repositories/prisma-case.repository';
import { CaseRepository } from 'src/modules/case/repositories/case.repository';
import { CaseFileRepository } from 'src/modules/case-file/repositories/case-file.repository';
import { PrismaCaseFileRepository } from './prisma/repositories/prisma-case-file.repository';
import { CaseLawyerRepository } from 'src/modules/case-lawyer/repositories/case-lawyer.repository';
import { PrismaCaseLawyerRepository } from './prisma/repositories/prisma-case-lawyer.repository';
import { NotificationRepository } from 'src/modules/notification/repositories/notification.repository';
import { PrismaNotificationRepository } from './prisma/repositories/prisma-notification.repository';
import { InviteRepository } from 'src/modules/invite/repositories/invite.repository';
import { PrismaInviteRepository } from './prisma/repositories/prisma-invite.repository';
import { ClientRepository } from 'src/modules/client/repositories/client.repository';
import { PrismaClientRepository } from './prisma/repositories/prisma-client.repository';
import { CaseClientRepository } from 'src/modules/case-client/repositories/case-client.repository';
import { PrismaCaseClientRepository } from './prisma/repositories/prisma-case-client.repository';
import { AddressRepository } from 'src/modules/address/repositories/address.repository';
import { PrismaAddressRepository } from './prisma/repositories/prisma-address.repository';
import { DocumentModelRepository } from 'src/modules/document-model/repositories/document-model.repository';
import { PrismaDocumentModelRepository } from './prisma/repositories/prisma-document-model.repository';
import { DocumentModelFileRepository } from 'src/modules/document-model-file/repositories/document-model-file.repository';
import { PrismaDocumentModelFileRepository } from './prisma/repositories/prisma-document-model-file.repository';
import { PrismaDependentRepository } from './prisma/repositories/prisma-dependent.repository';
import { DependentRepository } from 'src/modules/dependent/repositories/dependent.repository';

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
    {
      provide: CaseClientRepository,
      useClass: PrismaCaseClientRepository,
    },
    {
      provide: AddressRepository,
      useClass: PrismaAddressRepository,
    },
    {
      provide: DocumentModelRepository,
      useClass: PrismaDocumentModelRepository,
    },
    {
      provide: DocumentModelFileRepository,
      useClass: PrismaDocumentModelFileRepository,
    },
    {
      provide: DependentRepository,
      useClass: PrismaDependentRepository,
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
    CaseClientRepository,
    AddressRepository,
    DocumentModelRepository,
    DocumentModelFileRepository,
    DependentRepository,
  ],
})
export class DatabaseModule {}
