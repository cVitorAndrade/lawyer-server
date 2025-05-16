import { Dependent } from '../entities/dependent.entity';

export abstract class DependentRepository {
  abstract create(dependent: Dependent): Promise<void>;
  abstract findAllByClientId(clientId: string): Promise<Dependent[]>;
}
