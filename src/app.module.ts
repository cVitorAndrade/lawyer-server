import { Module } from '@nestjs/common';
import { DatabaseModule } from './infra/database/database.module';
import { LawyerModule } from './infra/http/modules/lawyer/lawyer.module';

@Module({
  imports: [LawyerModule, DatabaseModule],
})
export class AppModule {}
