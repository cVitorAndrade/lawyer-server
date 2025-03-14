import { Invite } from 'src/modules/invite/entities/invite.entity';

export class InviteViewModel {
  static toHttp({
    id,
    caseId,
    invitedById,
    invitedId,
    status,
    respondedAt,
    createdAt,
  }: Invite) {
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
}
