import { ClientFile } from 'src/modules/client-file/entities/client-file.entity';

export class ClientFileViewModel {
  static toHttp({
    id,
    clientId,
    createdAt,
    fullpath,
    mimetype,
    originalname,
    path,
    size,
    uploadedById,
  }: ClientFile) {
    return {
      id,
      clientId,
      createdAt,
      fullpath,
      mimetype,
      originalname,
      path,
      size,
      uploadedById,
    };
  }
}
