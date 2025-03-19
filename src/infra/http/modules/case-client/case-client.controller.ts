import { Body, Controller, Post } from '@nestjs/common';
import { CreateCaseClientUseCase } from 'src/modules/case-client/use-cases/create-case-client.use-case';
import { CreateCaseClientDto } from './dtos/create-case-client.dto';
import { CaseClienViewModel } from './view-model/case-client.view-model';

@Controller('case-client')
export class CaseClientController {
  constructor(
    private readonly createCaseClientUseCase: CreateCaseClientUseCase,
  ) {}

  @Post()
  async createCaseClient(@Body() body: CreateCaseClientDto) {
    const { caseId, clientId } = body;

    const caseClient = await this.createCaseClientUseCase.execute({
      caseId,
      clientId,
    });

    return CaseClienViewModel.toHttp(caseClient);
  }
}
