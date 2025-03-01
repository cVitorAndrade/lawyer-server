import { Request } from 'express';

export interface AuthenticatedRequestModel extends Request {
  user: {
    id: string;
    email: string;
    name: string;
    username: string;
    avatar?: string;
    telephone?: string;
    createdAt: string;
    updatedAt: string;
  };
}
