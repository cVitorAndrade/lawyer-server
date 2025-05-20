import { Injectable } from '@nestjs/common';
import { ClientFileRepository } from 'src/modules/client-file/repositories/client-file.repository';
import { PrismaService } from '../prisma.service';
import { ClientFile } from 'src/modules/client-file/entities/client-file.entity';
import { PrismaClientFileMapper } from '../mappers/prisma-client-file.mapper';

@Injectable()
export class PrismaClientFileRepository implements ClientFileRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async create(clientFile: ClientFile): Promise<void> {
    const prismaClientFile = PrismaClientFileMapper.toPrisma(clientFile);
    await this.prismaService.clientFiles.create({
      data: prismaClientFile,
    });
  }
}
