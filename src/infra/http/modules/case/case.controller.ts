import { Body, Controller, Get, Post, Request } from '@nestjs/common';
import { CreateCaseUseCase } from 'src/modules/cases/use-cases/create-case.use-case';
import { AuthenticatedRequestModel } from '../auth/models/authenticated-request.model';
import { CreateCaseDto } from './dtos/create-case.dto';
import { CaseViewModel } from './view-model/case.view-model';
import { GetAllCasesByLawyerIdUseCase } from 'src/modules/cases/use-cases/get-all-cases-by-lawyer-id.use-case';

@Controller('case')
export class CaseController {
  constructor(
    private createCaseUseCase: CreateCaseUseCase,
    private getAllCasesByLawyerIdUseCase: GetAllCasesByLawyerIdUseCase,
  ) {}

  @Post()
  async createCase(
    @Request() request: AuthenticatedRequestModel,
    @Body() body: CreateCaseDto,
  ) {
    const { user } = request;

    const caseEntity = await this.createCaseUseCase.execute({
      createdById: user.id,
      ...body,
    });

    return CaseViewModel.toHttp(caseEntity);
  }

  @Get()
  async getAllCasesByLawyerId(@Request() request: AuthenticatedRequestModel) {
    const { user } = request;
    const cases = await this.getAllCasesByLawyerIdUseCase.execute({
      lawyerId: user.id,
    });

    return cases.map((caseEntity) => CaseViewModel.toHttp(caseEntity));
  }
}
