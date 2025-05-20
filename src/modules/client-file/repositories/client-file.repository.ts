import { ClientFile } from '../entities/client-file.entity';

export abstract class ClientFileRepository {
  abstract create(clientFile: ClientFile): Promise<void>;
}
