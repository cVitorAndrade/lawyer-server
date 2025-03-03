import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { LawyerRepository } from 'src/modules/lawyer/repositories/lawyer.repository';
import { PrismaLawyerRepository } from './prisma/repositories/prisma-lawyer.repository';
import { PrismaCaseRepository } from './prisma/repositories/prisma-case.repository';
import { CaseRepository } from 'src/modules/cases/repositories/case.repository';
import { CaseUploadRepository } from 'src/modules/case-upload/repositories/case-upload.repository';
import { PrismaCaseUploadRepository } from './prisma/repositories/prisma-case-upload.repository';

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
      provide: CaseUploadRepository,
      useClass: PrismaCaseUploadRepository,
    },
  ],
  exports: [LawyerRepository, CaseRepository, CaseUploadRepository],
})
export class DatabaseModule {}
