import { InviteNotificationDetails } from './invite-notification.type';
import { UploadNotificationDetails } from './upload-notification.type';

export type NotificationDetails =
  | InviteNotificationDetails
  | UploadNotificationDetails;
