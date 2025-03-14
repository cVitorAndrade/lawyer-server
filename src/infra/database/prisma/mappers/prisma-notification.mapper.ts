import { Notifications as PrismaNotification } from '@prisma/client';
import { Notification } from 'src/modules/notification/entities/notification.entity';
import { NotificationDetails } from 'src/modules/notification/types/notification-details.type';
import { NotificationType } from 'src/modules/notification/types/notification-types.type';

export class PrismaNotificationMapper {
  static toPrisma({
    id,
    lawyerId,
    type,
    message,
    details,
    isRead,
    createdAt,
  }: Notification): PrismaNotification {
    return { id, lawyerId, type, message, details, isRead, createdAt };
  }

  static toDomain({
    id,
    lawyerId,
    type,
    details,
    isRead,
    message,
    createdAt,
  }: PrismaNotification): Notification {
    return new Notification(
      {
        lawyerId,
        type: type as NotificationType,
        details: details as NotificationDetails,
        isRead,
        message,
        createdAt,
      },
      id,
    );
  }
}
