import { Invites as PrismaInvite } from '@prisma/client';
import { Invite } from 'src/modules/invite/entities/invite.entity';
import { InviteStatus } from 'src/modules/invite/types/invite-status.type';

export class PrismaInviteMapper {
  static toPrisma({
    id,
    caseId,
    invitedById,
    invitedId,
    status,
    respondedAt,
    createdAt,
  }: Invite): PrismaInvite {
    return {
      id,
      caseId,
      invitedById,
      invitedId,
      status,
      respondedAt,
      createdAt,
    };
  }

  static toDomain({
    id,
    caseId,
    invitedById,
    invitedId,
    status,
    respondedAt,
    createdAt,
  }: PrismaInvite): Invite {
    return new Invite(
      {
        caseId,
        invitedById,
        invitedId,
        status: status as InviteStatus,
        respondedAt,
        createdAt,
      },
      id,
    );
  }
}
