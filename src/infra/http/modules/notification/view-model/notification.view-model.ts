import { Notification } from 'src/modules/notification/entities/notification.entity';

export class NotificationViewModel {
  static toHttp({
    id,
    lawyerId,
    type,
    message,
    details,
    isRead,
    createdAt,
  }: Notification) {
    return { id, lawyerId, type, message, details, isRead, createdAt };
  }
}
