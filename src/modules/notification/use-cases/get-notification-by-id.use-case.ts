import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { NotificationRepository } from '../repositories/notification.repository';

interface GetNotificationByIdRequest {
  notificationId: string;
  ownerId: string;
}

@Injectable()
export class GetNotificationByIdUseCase {
  constructor(
    private readonly notificationRepository: NotificationRepository,
  ) {}

  async execute({ notificationId, ownerId }: GetNotificationByIdRequest) {
    const notification =
      await this.notificationRepository.findById(notificationId);
    if (!notification) throw new NotFoundException();

    const isOwner = notification.lawyerId === ownerId;
    if (!isOwner) throw new UnauthorizedException();

    return notification;
  }
}
