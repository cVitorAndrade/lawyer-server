import { Lawyers as PrismaLawyer } from '@prisma/client';
import { Lawyer } from 'src/modules/lawyer/entities/lawyer.entity';

export class PrismaLawyerMapper {
  static toPrisma({
    id,
    username,
    name,
    email,
    password,
    avatar,
    telephone,
    createdAt,
    updatedAt,
  }: Lawyer): PrismaLawyer {
    return {
      id,
      username,
      name,
      email,
      password,
      avatar,
      telephone,
      createdAt,
      updatedAt,
    };
  }
}
