import { Lawyer } from '../entities/lawyer.entity';

export abstract class LawyerRepository {
  abstract create(lawyer: Lawyer): Promise<void>;
}
