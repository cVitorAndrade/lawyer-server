import { Injectable, NotFoundException } from '@nestjs/common';
import { InviteRepository } from '../repositories/invite.repository';

interface RejectCaseInvitationRequest {
  inviteId: string;
}

@Injectable()
export class RejectCaseInvitationUseCase {
  constructor(private readonly inviteRepository: InviteRepository) {}

  async execute({ inviteId }: RejectCaseInvitationRequest) {
    const invite = await this.inviteRepository.findById(inviteId);
    if (!invite) throw new NotFoundException();

    invite.status = 'rejected';
    await this.inviteRepository.update(invite);
    return invite;
  }
}
