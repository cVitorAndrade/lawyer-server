import { Lawyer } from 'src/modules/lawyer/entities/lawyer.entity';

export class LawyerViewModel {
  static toHttp({
    id,
    email,
    name,
    username,
    avatar,
    telephone,
    createdAt,
    updatedAt,
  }: Lawyer) {
    return {
      id,
      email,
      name,
      username,
      avatar,
      telephone,
      createdAt,
      updatedAt,
    };
  }
}
