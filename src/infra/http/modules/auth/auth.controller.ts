import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthRequestModel } from './models/auth-request.model';
import { SignInUseCase } from 'src/modules/auth/use-cases/sign-in-use-case';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { Public } from './decorators/isPublic';
import { AuthenticatedRequestModel } from './models/authenticated-request.model';

@Controller()
export class AuthController {
  constructor(private signInUseCase: SignInUseCase) {}

  @Post('signIn')
  @Public()
  @HttpCode(HttpStatus.OK)
  @UseGuards(LocalAuthGuard)
  async signIn(@Request() request: AuthRequestModel) {
    const { user } = request;
    const access_token = await this.signInUseCase.execute({ lawyer: user });
    return { access_token };
  }

  @Get('test')
  async test(@Request() request: AuthenticatedRequestModel) {
    return request.user;
  }
}
