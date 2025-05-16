import { Body, Controller, Get, Post, Request } from '@nestjs/common';
import { AuthenticatedRequestModel } from '../auth/models/authenticated-request.model';
import { CreateClientDto } from './dtos/create-client.dto';
import { CreateClientUseCase } from 'src/modules/client/use-cases/create-client.use-case';
import { ClientViewModel } from './view-model/client.view-model';
import { GetClientsByLawyerIdUseCase } from 'src/modules/client/use-cases/get-clients-by-lawyer-id.use-case';
import { GetCasesByClientIdUseCase } from 'src/modules/case-client/use-cases/get-cases-by-client-id.use-case';

@Controller('client')
export class ClientController {
  constructor(
    private readonly createClientUseCase: CreateClientUseCase,
    private readonly getClientsByLawyerIdUseCase: GetClientsByLawyerIdUseCase,
    private readonly getCasesByClientIdUseCase: GetCasesByClientIdUseCase,
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
        const [cases] = await Promise.all([
          this.getCasesByClientIdUseCase.execute({ clientId: client.id }),
        ]);

        return {
          ...ClientViewModel.toHttp(client),
          cases,
        };
      }),
    );
  }
}
