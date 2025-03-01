import {
  BadRequestException,
  Injectable,
  NestMiddleware,
} from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { SignInDto } from '../dtos/sign-in.dto';
import { validate } from 'class-validator';

@Injectable()
export class SignInValidateDtoMiddleware implements NestMiddleware {
  async use(req: Request, res: Response, next: NextFunction) {
    const body = req.body;

    const signInDto = new SignInDto();
    signInDto.email = body.email;
    signInDto.password = body.password;

    const validations = await validate(signInDto);
    const haveErrors = validations.length > 0;
    if (haveErrors) throw new BadRequestException();

    next();
  }
}
