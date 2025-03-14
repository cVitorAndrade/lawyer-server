import { Replace } from 'src/utils/replace';
import { NotificationDetails } from '../types/notification-details.type';
import { randomUUID } from 'crypto';
import { NotificationType } from '../types/notification-types.type';

interface NotificationProps {
  lawyerId: string;
  type: NotificationType;
  message: string;
  isRead: boolean;
  details: NotificationDetails;
  createdAt: Date;
}

export class Notification {
  private _id: string;
  private props: NotificationProps;

  constructor(
    props: Replace<NotificationProps, { createdAt?: Date }>,
    id?: string,
  ) {
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
    };
    this._id = id ?? randomUUID();
  }

  get id(): string {
    return this._id;
  }

  get lawyerId(): string {
    return this.props.lawyerId;
  }

  set lawyerId(lawyerId: string) {
    this.props.lawyerId = lawyerId;
  }

  get type(): NotificationType {
    return this.props.type;
  }

  set type(type: NotificationType) {
    this.props.type = type;
  }

  get message(): string {
    return this.props.message;
  }

  set message(message: string) {
    this.props.message = message;
  }

  get isRead(): boolean {
    return this.props.isRead;
  }

  set isRead(isRead: boolean) {
    this.props.isRead = isRead;
  }

  get details(): NotificationDetails {
    return this.props.details;
  }

  set details(details: NotificationDetails) {
    this.props.details = details;
  }

  get createdAt(): Date {
    return this.props.createdAt;
  }
}
