import { Injectable } from '@nestjs/common';
import { ClientRepository } from 'src/modules/client/repositories/client.repository';
import { PrismaService } from '../prisma.service';
import { Client } from 'src/modules/client/entities/client.entity';
import { PrismaClientMapper } from '../mappers/prisma-client.mapper';

@Injectable()
export class PrismaClientRepository implements ClientRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async create(client: Client): Promise<void> {
    const prismaClient = PrismaClientMapper.toPrisma(client);
    await this.prismaService.clients.create({
      data: prismaClient,
    });
  }

  async findAllByLawyerId(lawyerId: string): Promise<Client[]> {
    const prismaClients = await this.prismaService.clients.findMany({
      where: {
        createdById: lawyerId,
      },
    });

    return prismaClients.map(PrismaClientMapper.toDomain);
  }

  async findById(id: string): Promise<Client | null> {
    const prismaClient = await this.prismaService.clients.findUnique({
      where: { id },
    });
    if (!prismaClient) return null;
    return PrismaClientMapper.toDomain(prismaClient);
  }
}
