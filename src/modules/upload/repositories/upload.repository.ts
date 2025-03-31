import { UploadFileDto } from 'src/infra/http/modules/upload/dtos/upload-file.dto';
import { UploadResponseDto } from '../dtos/upload-response.dto';
import { DownloadFileResult } from 'src/modules/case-file/types/download-file-result.type';

export abstract class UploadRepository {
  abstract uploadFile(
    file: UploadFileDto,
    path: string,
  ): Promise<UploadResponseDto>;
  abstract updateLawyerAvatar(file: UploadFileDto): Promise<UploadResponseDto>;
  abstract deleteLawyerAvatar(path: string): Promise<void>;
  abstract downloadCaseFile(path: string): Promise<DownloadFileResult>;
  abstract deleteFolder(bucket: string, folder: string): Promise<void>;
  abstract downloadFile(
    bucket: string,
    path: string,
  ): Promise<DownloadFileResult>;
  abstract downloadAllFolderFiles(
    bucket: string,
    folder: string,
  ): Promise<DownloadFileResult[]>;
  abstract deleteFile(bucket: string, path: string): Promise<void>;
}
