import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { LawyerRepository } from 'src/modules/lawyer/repositories/lawyer.repository';
import { PrismaLawyerRepository } from './prisma/repositories/prisma-lawyer-repository';

@Module({
  providers: [
    PrismaService,
    {
      provide: LawyerRepository,
      useClass: PrismaLawyerRepository,
    },
  ],
  exports: [LawyerRepository],
})
export class DatabaseModule {}
