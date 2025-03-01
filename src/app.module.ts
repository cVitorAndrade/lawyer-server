import { Module } from '@nestjs/common';
import { DatabaseModule } from './infra/database/database.module';
import { LawyerModule } from './infra/http/modules/lawyer/lawyer.module';
import { AuthModule } from './infra/http/modules/auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './infra/http/modules/auth/guards/jwt-auth.guard';

@Module({
  imports: [LawyerModule, DatabaseModule, AuthModule],
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {}
