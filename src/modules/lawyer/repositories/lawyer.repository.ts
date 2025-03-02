import { Lawyer } from '../entities/lawyer.entity';

export abstract class LawyerRepository {
  abstract create(lawyer: Lawyer): Promise<void>;
  abstract findByEmail(email: string): Promise<Lawyer | null>;
  abstract findById(id: string): Promise<Lawyer | null>;
}
