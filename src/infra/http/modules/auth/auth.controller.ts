import {
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  UseGuards,
  Res,
} from '@nestjs/common';
import { AuthRequestModel } from './models/auth-request.model';
import { SignInUseCase } from 'src/modules/auth/use-cases/sign-in-use-case';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { Public } from './decorators/isPublic';
import { Response } from 'express';

@Controller()
export class AuthController {
  constructor(private signInUseCase: SignInUseCase) {}

  @Post('signIn')
  @Public()
  @HttpCode(HttpStatus.OK)
  @UseGuards(LocalAuthGuard)
  async signIn(
    @Request() request: AuthRequestModel,
    @Res({ passthrough: true }) response: Response,
  ) {
    const { user } = request;
    const access_token = await this.signInUseCase.execute({ lawyer: user });

    const tokenExpiresInMs = 30 * 24 * 60 * 60 * 1000;

    response.cookie('access_token', access_token, {
      httpOnly: true,
      secure: false,
      sameSite: 'lax',
      maxAge: tokenExpiresInMs,
    });

    return { access_token };
  }
}
