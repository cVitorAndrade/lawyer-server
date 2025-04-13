import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { InviteRepository } from '../repositories/invite.repository';

interface GetInviteByIdRequest {
  inviteId: string;
  ownerId: string;
}

@Injectable()
export class GetInviteByIdUseCase {
  constructor(private readonly inviteRepository: InviteRepository) {}

  async execute({ inviteId, ownerId }: GetInviteByIdRequest) {
    const invite = await this.inviteRepository.findById(inviteId);
    if (!invite) throw new NotFoundException();

    const isOwner = invite.invitedId === ownerId;
    if (!isOwner) throw new UnauthorizedException();

    return invite;
  }
}
