import { Injectable } from '@nestjs/common';
import { InviteRepository } from '../repositories/invite.repository';
import { Invite } from '../entities/invite.entity';

interface CreateInviteRequest {
  caseId: string;
  invitedId: string;
  invitedById: string;
}

@Injectable()
export class CreateInviteUseCase {
  constructor(private readonly inviteRepository: InviteRepository) {}

  async execute(createInviteRequest: CreateInviteRequest) {
    const invite = new Invite({
      ...createInviteRequest,
      status: 'pending',
    });

    await this.inviteRepository.create(invite);
    return invite;
  }
}
