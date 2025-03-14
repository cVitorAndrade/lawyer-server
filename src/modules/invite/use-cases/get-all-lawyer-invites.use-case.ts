import { Injectable } from '@nestjs/common';
import { InviteRepository } from '../repositories/invite.repository';

interface GetAllLawyerInvitesRequest {
  lawyerId: string;
}

@Injectable()
export class GetAllLawyerInvitesUseCase {
  constructor(private readonly inviteRepository: InviteRepository) {}

  async execute({ lawyerId }: GetAllLawyerInvitesRequest) {
    const invites = await this.inviteRepository.getAllLawyerInvites(lawyerId);
    return invites;
  }
}
