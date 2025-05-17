import { Client } from '../entities/client.entity';

export abstract class ClientRepository {
  abstract create(client: Client): Promise<void>;
  abstract findAllByLawyerId(lawyerId: string): Promise<Client[]>;
  abstract findById(id: string): Promise<Client | null>;
}
