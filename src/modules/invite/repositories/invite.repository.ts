import { Invite } from '../entities/invite.entity';

export abstract class InviteRepository {
  abstract create(invite: Invite): Promise<void>;
  abstract getAllLawyerInvites(lawyerId: string): Promise<Invite[]>;
  abstract update(invite: Invite): Promise<void>;
  abstract findById(id: string): Promise<Invite | null>;
}
