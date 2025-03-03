import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { LawyerRepository } from 'src/modules/lawyer/repositories/lawyer.repository';
import { PrismaLawyerRepository } from './prisma/repositories/prisma-lawyer.repository';
import { PrismaCaseRepository } from './prisma/repositories/prisma-case.repository';
import { CaseRepository } from 'src/modules/cases/repositories/case.repository';

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
  ],
  exports: [LawyerRepository, CaseRepository],
})
export class DatabaseModule {}
