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

  static toDomain({
    avatar,
    createdAt,
    email,
    id,
    name,
    password,
    telephone,
    updatedAt,
    username,
  }: PrismaLawyer): Lawyer {
    return new Lawyer(
      {
        avatar,
        createdAt,
        email,
        name,
        password,
        telephone,
        updatedAt,
        username,
      },
      id,
    );
  }
}
