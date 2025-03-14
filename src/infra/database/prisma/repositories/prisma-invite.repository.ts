import { Injectable } from '@nestjs/common';
import { InviteRepository } from 'src/modules/invite/repositories/invite.repository';
import { PrismaService } from '../prisma.service';
import { Invite } from 'src/modules/invite/entities/invite.entity';
import { PrismaInviteMapper } from '../mappers/prisma-invite.mapper';

@Injectable()
export class PrismaInviteRepository implements InviteRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async create(invite: Invite): Promise<void> {
    const prismaInvite = PrismaInviteMapper.toPrisma(invite);
    await this.prismaService.invites.create({
      data: prismaInvite,
    });
  }

  async getAllLawyerInvites(lawyerId: string): Promise<Invite[]> {
    const primsaInvites = await this.prismaService.invites.findMany({
      where: {
        invitedId: lawyerId,
      },
    });

    return primsaInvites.map((invite) => PrismaInviteMapper.toDomain(invite));
  }

  async update(invite: Invite): Promise<void> {
    const prismaInvite = PrismaInviteMapper.toPrisma(invite);
    await this.prismaService.invites.update({
      data: prismaInvite,
      where: {
        id: prismaInvite.id,
      },
    });
  }

  async findById(id: string): Promise<Invite | null> {
    const prismaInvite = await this.prismaService.invites.findUnique({
      where: { id },
    });
    if (!prismaInvite) return null;

    return PrismaInviteMapper.toDomain(prismaInvite);
  }
}
