import { Injectable } from '@nestjs/common';
import { NotificationRepository } from '../repositories/notification.repository';
import { NotificationDetails } from '../types/notification-details.type';
import { Notification } from '../entities/notification.entity';
import { NotificationType } from '../types/notification-types.type';

interface CreateNotificationRequest {
  lawyerId: string;
  type: NotificationType;
  message: string;
  details: NotificationDetails;
}

@Injectable()
export class CreateNotificationUseCase {
  constructor(
    private readonly notificationRepository: NotificationRepository,
  ) {}

  async execute(createNotificationRequest: CreateNotificationRequest) {
    const notification = new Notification({
      ...createNotificationRequest,
      isRead: false,
    });

    await this.notificationRepository.create(notification);
    return notification;
  }
}
