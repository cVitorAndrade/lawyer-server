export type UploadNotificationDetails = {
  context: 'task' | 'case';
  contextId: string;
  uploadedById: string;
  originalname: string;
  fullpath: string;
};
