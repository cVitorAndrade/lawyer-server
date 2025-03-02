import { Lawyer } from 'src/modules/lawyer/entities/lawyer.entity';

export class LawyerViewModel {
  static toHttp({
    email,
    name,
    username,
    avatar,
    telephone,
    createdAt,
    updatedAt,
  }: Lawyer) {
    return {
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
