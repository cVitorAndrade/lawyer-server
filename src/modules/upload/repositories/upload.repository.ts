import { UploadFileDto } from 'src/infra/http/modules/upload/dtos/upload-file.dto';
import { UploadResponseDto } from '../dtos/upload-response.dto';

export abstract class UploadRepository {
  abstract uploadFile(
    file: UploadFileDto,
    path: string,
  ): Promise<UploadResponseDto>;
}
