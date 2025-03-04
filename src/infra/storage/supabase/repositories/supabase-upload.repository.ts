import { Injectable } from '@nestjs/common';
import { UploadFileDto } from 'src/infra/http/modules/upload/dtos/upload-file.dto';
import { UploadRepository } from 'src/modules/upload/repositories/upload.repository';
import { SupabaseService } from '../supabase.service';
import { UploadResponseDto } from 'src/modules/upload/dtos/upload-response.dto';
import { randomUUID } from 'crypto';

@Injectable()
export class SupabaseUploadRepository implements UploadRepository {
  constructor(private supabaseService: SupabaseService) {}
  async uploadFile(
    file: UploadFileDto,
    path: string,
  ): Promise<UploadResponseDto> {
    const supabase = this.supabaseService.getClient;
    const filename = `${file.originalname}_${randomUUID()}`;

    const { data, error } = await supabase.storage
      .from(path)
      .upload(filename, file.buffer);

    if (error) throw new Error(error.message);

    return data;
  }

  async updateLawyerAvatar(file: UploadFileDto): Promise<UploadResponseDto> {
    const supabase = this.supabaseService.getClient;
    const filename = `${file.originalname}_${randomUUID()}`;

    const { data, error } = await supabase.storage
      .from('avatars')
      .upload(filename, file.buffer);

    if (error) throw new Error(error.message);

    return data;
  }

  async deleteLawyerAvatar(path: string): Promise<void> {
    const supabase = this.supabaseService.getClient;
    await supabase.storage.from('avatars').remove([path]);
  }
}
