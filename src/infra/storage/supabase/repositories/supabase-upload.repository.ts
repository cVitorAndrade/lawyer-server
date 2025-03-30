import { Injectable } from '@nestjs/common';
import { UploadFileDto } from 'src/infra/http/modules/upload/dtos/upload-file.dto';
import { UploadRepository } from 'src/modules/upload/repositories/upload.repository';
import { SupabaseService } from '../supabase.service';
import { UploadResponseDto } from 'src/modules/upload/dtos/upload-response.dto';
import { randomUUID } from 'crypto';
import { DownloadFileResult } from 'src/modules/case-file/types/download-file-result.type';

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
      .upload(filename, file.buffer, {
        contentType: file.mimetype,
      });

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

  async downloadCaseFile(path: string): Promise<DownloadFileResult> {
    const supabase = this.supabaseService.getClient;
    const { data } = await supabase.storage.from('cases').download(path);

    const arrayBuffer = await data.arrayBuffer();
    const fileBuffer = Buffer.from(arrayBuffer);
    const mimeType = data.type;
    const filename = path.split('/').pop() || 'unknown-file';

    return {
      fileBuffer,
      filename,
      mimeType,
    };
  }

  async downloadFile(
    bucket: string,
    path: string,
  ): Promise<DownloadFileResult> {
    const supabase = this.supabaseService.getClient;
    const { data } = await supabase.storage.from(bucket).download(path);

    const arrayBuffer = await data.arrayBuffer();
    const fileBuffer = Buffer.from(arrayBuffer);
    const mimeType = data.type;
    const filename = path.split('/').pop() || 'unknown-file';

    return {
      fileBuffer,
      filename,
      mimeType,
    };
  }

  async deleteFolder(bucket: string, folder: string): Promise<void> {
    const supabase = this.supabaseService.getClient;
    const { data: files } = await supabase.storage.from(bucket).list(folder);

    const filesToRemove = files.map((file) => `${folder}/${file.name}`);
    await supabase.storage.from(bucket).remove(filesToRemove);
  }

  async deleteFile(bucket: string, path: string): Promise<void> {
    const supabase = this.supabaseService.getClient;
    await supabase.storage.from(bucket).remove([path]);
  }
}
