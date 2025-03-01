import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Lawyer } from 'src/modules/lawyer/entities/lawyer.entity';
import { LawyerPayload } from '../models/lawyer-payload';

interface SignInRequest {
  lawyer: Lawyer;
}

@Injectable()
export class SignInUseCase {
  constructor(private jwtService: JwtService) {}

  async execute({ lawyer }: SignInRequest) {
    const {
      id,
      email,
      name,
      username,
      avatar,
      telephone,
      createdAt,
      updatedAt,
    } = lawyer;

    const payload: LawyerPayload = {
      sub: id,
      email,
      name,
      username,
      avatar,
      telephone,
      createdAt: createdAt.toJSON(),
      updatedAt: updatedAt.toJSON(),
    };

    const jwtToken = this.jwtService.sign(payload);
    return jwtToken;
  }
}
