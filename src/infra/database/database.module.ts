import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { LawyerRepository } from 'src/modules/lawyer/repositories/lawyer.repository';
import { PrismaLawyerRepository } from './prisma/repositories/prisma-lawyer.repository';
import { PrismaCaseRepository } from './prisma/repositories/prisma-case.repository';
import { CaseRepository } from 'src/modules/cases/repositories/case.repository';
import { CaseFileRepository } from 'src/modules/case-files/repositories/case-file.repository';
import { PrismaCaseFileRepository } from './prisma/repositories/prisma-case-file.repository';

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
  ],
  exports: [LawyerRepository, CaseRepository, CaseFileRepository],
})
export class DatabaseModule {}
