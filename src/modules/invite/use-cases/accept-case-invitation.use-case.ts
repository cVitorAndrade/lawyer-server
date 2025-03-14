import { Injectable, NotFoundException } from '@nestjs/common';
import { InviteRepository } from '../repositories/invite.repository';

interface AcceptCaseInvitationRequest {
  inviteId: string;
}

@Injectable()
export class AcceptCaseInvitationUseCase {
  constructor(private readonly inviteRepository: InviteRepository) {}

  async execute({ inviteId }: AcceptCaseInvitationRequest) {
    const invite = await this.inviteRepository.findById(inviteId);
    if (!invite) throw new NotFoundException();

    invite.status = 'accepted';
    await this.inviteRepository.update(invite);
    return invite;
  }
}
