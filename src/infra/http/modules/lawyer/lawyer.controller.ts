import { Body, Controller, Get, Post, Request } from '@nestjs/common';
import { CreateLawyerDto } from './dtos/create-lawyer.dto';
import { CreateLawyerUseCase } from 'src/modules/lawyer/use-cases/create-lawyer.use-case';
import { Public } from '../auth/decorators/isPublic';
import { AuthenticatedRequestModel } from '../auth/models/authenticated-request.model';
import { GetLawyerByIdUseCase } from 'src/modules/lawyer/use-cases/get-lawyer-by-id.use-case';

@Controller('lawyer')
export class LawyerController {
  constructor(
    private createLawyerUseCase: CreateLawyerUseCase,
    private getLawyerByIdUseCase: GetLawyerByIdUseCase,
  ) {}

  @Post()
  @Public()
  async createLawyer(@Body() body: CreateLawyerDto) {
    const lawyer = await this.createLawyerUseCase.execute(body);
    return lawyer;
  }

  @Get()
  async getLawyer(@Request() request: AuthenticatedRequestModel) {
    const { user } = request;

    const lawyer = await this.getLawyerByIdUseCase.execute({
      lawyerId: user.id,
    });

    return lawyer;
  }
}
