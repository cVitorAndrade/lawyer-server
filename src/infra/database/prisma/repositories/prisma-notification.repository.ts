import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { NotificationRepository } from 'src/modules/notification/repositories/notification.repository';
import { Notification } from 'src/modules/notification/entities/notification.entity';
import { PrismaNotificationMapper } from '../mappers/prisma-notification.mapper';

@Injectable()
export class PrismaNotificationRepository implements NotificationRepository {
  constructor(private prismaService: PrismaService) {}

  async create(notification: Notification): Promise<void> {
    const prismaNotification = PrismaNotificationMapper.toPrisma(notification);
    await this.prismaService.notifications.create({
      data: prismaNotification,
    });
  }

  async getAllLawyerNotifications(lawyerId: string): Promise<Notification[]> {
    const prismaNotifications = await this.prismaService.notifications.findMany(
      {
        where: {
          lawyerId,
        },
      },
    );

    return prismaNotifications.map((prismaNotification) =>
      PrismaNotificationMapper.toDomain(prismaNotification),
    );
  }

  async findById(id: string): Promise<Notification | null> {
    const prismaNotification =
      await this.prismaService.notifications.findUnique({
        where: { id },
      });

    if (!prismaNotification) return null;

    return PrismaNotificationMapper.toDomain(prismaNotification);
  }
}
