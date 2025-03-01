import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { Lawyer } from 'src/modules/lawyer/entities/lawyer.entity';
import { ValidateLawyerUseCase } from '../use-cases/validate-lawyer.use-case';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private validateUserUseCase: ValidateLawyerUseCase) {
    super({
      usernameField: 'email',
    });
  }

  async validate(email: string, password: string): Promise<Lawyer> {
    return await this.validateUserUseCase.execute({
      email,
      password,
    });
  }
}
