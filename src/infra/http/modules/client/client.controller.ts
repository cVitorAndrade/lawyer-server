import { Body, Controller, Post, Request } from '@nestjs/common';
import { AuthenticatedRequestModel } from '../auth/models/authenticated-request.model';
import { CreateClientDto } from './dtos/create-client.dto';
import { CreateClientUseCase } from 'src/modules/client/use-cases/create-client.use-case';
import { ClientViewModel } from './view-model/client.view-model';

@Controller('client')
export class ClientController {
  constructor(private readonly createClientUseCase: CreateClientUseCase) {}

  @Post()
  async createClient(
    @Request() request: AuthenticatedRequestModel,
    @Body() body: CreateClientDto,
  ) {
    const { user } = request;
    const { name, email, birthDate, telephone } = body;

    const client = await this.createClientUseCase.execute({
      createdById: user.id,
      name,
      email,
      birthDate,
      telephone,
    });

    return ClientViewModel.toHttp(client);
  }
}
