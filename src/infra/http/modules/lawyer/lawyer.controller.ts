import { Body, Controller, Post } from '@nestjs/common';
import { CreateLawyerDto } from './dtos/create-lawyer.dto';
import { CreateLawyerUseCase } from 'src/modules/lawyer/use-cases/create-lawyer.use-case';

@Controller('lawyer')
export class LawyerController {
  constructor(private createLawyerUseCase: CreateLawyerUseCase) {}

  @Post()
  async createLawyer(@Body() body: CreateLawyerDto) {
    const lawyer = await this.createLawyerUseCase.execute(body);
    return lawyer;
  }
}
