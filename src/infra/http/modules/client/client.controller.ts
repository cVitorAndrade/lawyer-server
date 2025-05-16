import { Body, Controller, Get, Post, Request } from '@nestjs/common';
import { AuthenticatedRequestModel } from '../auth/models/authenticated-request.model';
import { CreateClientDto } from './dtos/create-client.dto';
import { CreateClientUseCase } from 'src/modules/client/use-cases/create-client.use-case';
import { ClientViewModel } from './view-model/client.view-model';
import { GetClientsByLawyerIdUseCase } from 'src/modules/client/use-cases/get-clients-by-lawyer-id.use-case';
import { GetCasesByClientIdUseCase } from 'src/modules/case-client/use-cases/get-cases-by-client-id.use-case';
import { GetDependentsByClientIdUseCase } from 'src/modules/dependent/use-cases/get-dependents-by-client-id.use-case';
import { DependentViewModel } from '../dependent/view-model/dependent.view-model';
import { CaseViewModel } from '../case/view-model/case.view-model';

@Controller('client')
export class ClientController {
  constructor(
    private readonly createClientUseCase: CreateClientUseCase,
    private readonly getClientsByLawyerIdUseCase: GetClientsByLawyerIdUseCase,
    private readonly getCasesByClientIdUseCase: GetCasesByClientIdUseCase,
    private readonly getDependentsByClientIdUseCase: GetDependentsByClientIdUseCase,
  ) {}

  @Post()
  async createClient(
    @Request() request: AuthenticatedRequestModel,
    @Body() body: CreateClientDto,
  ) {
    const { user } = request;

    const client = await this.createClientUseCase.execute({
      createdById: user.id,
      ...body,
    });

    return ClientViewModel.toHttp(client);
  }

  @Get()
  async getClientsByLawyerId(@Request() request: AuthenticatedRequestModel) {
    const { user } = request;

    const clients = await this.getClientsByLawyerIdUseCase.execute({
      lawyerId: user.id,
    });

    return Promise.all(
      clients.map(async (client) => {
        const clientId = client.id;

        const [cases, dependents] = await Promise.all([
          this.getCasesByClientIdUseCase.execute({ clientId }),
          this.getDependentsByClientIdUseCase.execute({ clientId }),
        ]);

        return {
          ...ClientViewModel.toHttp(client),
          cases: cases.map(CaseViewModel.toHttp),
          dependents: dependents.map(DependentViewModel.toHttp),
        };
      }),
    );
  }
}
