import { Module } from '@nestjs/common';
import { SupabaseService } from './supabase/supabase.service';
import { UploadRepository } from 'src/modules/upload/repositories/upload.repository';
import { SupabaseUploadRepository } from './supabase/repositories/supabase-upload.repository';

@Module({
  providers: [
    SupabaseService,
    {
      useClass: SupabaseUploadRepository,
      provide: UploadRepository,
    },
  ],
  exports: [UploadRepository],
})
export class StorageModule {}
