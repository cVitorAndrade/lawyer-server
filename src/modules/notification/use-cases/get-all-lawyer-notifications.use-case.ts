import { Injectable } from '@nestjs/common';
import { NotificationRepository } from '../repositories/notification.repository';

interface GetAllLawerNotificationsRequest {
  lawyerId: string;
}

@Injectable()
export class GetAllLawyerNotificationsUseCase {
  constructor(
    private readonly notificationRepository: NotificationRepository,
  ) {}

  async execute({ lawyerId }: GetAllLawerNotificationsRequest) {
    const notifications =
      await this.notificationRepository.getAllLawyerNotifications(lawyerId);
    return notifications;
  }
}
