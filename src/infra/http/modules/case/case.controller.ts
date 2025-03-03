import { Body, Controller, Post, Request } from '@nestjs/common';
import { CreateCaseUseCase } from 'src/modules/cases/use-cases/create-case.use-case';
import { AuthenticatedRequestModel } from '../auth/models/authenticated-request.model';
import { CreateCaseDto } from './dtos/create-case.dto';
import { CaseViewModel } from './view-model/case.view-model';

@Controller('case')
export class CaseController {
  constructor(private createCaseUseCase: CreateCaseUseCase) {}

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
}
