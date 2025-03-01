import { Request } from 'express';
import { Lawyer } from 'src/modules/lawyer/entities/lawyer.entity';

export interface AuthRequestModel extends Request {
  user: Lawyer;
}
