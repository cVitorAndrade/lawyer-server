import { Module } from '@nestjs/common';
import { DatabaseModule } from './infra/database/database.module';
import { LawyerModule } from './infra/http/modules/lawyer/lawyer.module';
import { AuthModule } from './infra/http/modules/auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './infra/http/modules/auth/guards/jwt-auth.guard';
import { UploadModule } from './infra/http/modules/upload/upload.module';
import { StorageModule } from './infra/storage/storage.module';
import { CaseModule } from './infra/http/modules/case/case.module';
import { CaseFileModule } from './infra/http/modules/case-file/case-file.module';
import { CaseLawyerModule } from './infra/http/modules/case-lawyer/case-lawyer.module';
import { InviteModule } from './infra/http/modules/invite/invite.module';
import { NotificationModule } from './infra/http/modules/notification/notification.module';

@Module({
  imports: [
    LawyerModule,
    DatabaseModule,
    AuthModule,
    UploadModule,
    StorageModule,
    CaseModule,
    CaseFileModule,
    CaseLawyerModule,
    InviteModule,
    NotificationModule,
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {}
