import { Body, Controller, Get, Param, Post, Request } from '@nestjs/common';
import { CreateCaseUseCase } from 'src/modules/case/use-cases/create-case.use-case';
import { AuthenticatedRequestModel } from '../auth/models/authenticated-request.model';
import { CreateCaseDto } from './dtos/create-case.dto';
import { CaseViewModel } from './view-model/case.view-model';
import { GetAllCasesUseCase } from 'src/modules/case/use-cases/get-all-cases.use-case';
import { GetAllCaseLawyersUseCase } from 'src/modules/case-lawyer/use-cases/get-all-case-lawyers.use-case';
import { GetAllCaseClientsUseCase } from 'src/modules/case-client/use-cases/get-all-case-clients.use-case';
import { LawyerViewModel } from '../lawyer/view-model/lawyer.view-model';
import { ClientViewModel } from '../client/view-model/client.view-model';
import { GetLawyerByIdUseCase } from 'src/modules/lawyer/use-cases/get-lawyer-by-id.use-case';
import { CreateCaseLawyerUseCase } from 'src/modules/case-lawyer/use-cases/create-case-lawyer.use-case';
import { GetAllLawyerCasesUseCase } from 'src/modules/case-lawyer/use-cases/get-all-lawyer-cases.use-case';
import { GetCaseByIdUseCase } from 'src/modules/case/use-cases/get-case-by-id.use-case';
import { GetAddressByOwnerIdUseCase } from 'src/modules/address/use-cases/get-address-by-owner-id.use-case';
import { AddressViewModel } from '../address/view-model/address.view-model';

@Controller('case')
export class CaseController {
  constructor(
    private readonly createCaseUseCase: CreateCaseUseCase,
    private readonly getAllCasesUseCase: GetAllCasesUseCase,
    private readonly getAllLawyerCasesUseCase: GetAllLawyerCasesUseCase,
    private readonly createCaseLawyerUseCase: CreateCaseLawyerUseCase,
    private readonly getLawyerByIdUseCase: GetLawyerByIdUseCase,
    private readonly getAllCaseLawyersUseCase: GetAllCaseLawyersUseCase,
    private readonly getAllCaseClientsUseCase: GetAllCaseClientsUseCase,
    private readonly getCaseByIdUseCase: GetCaseByIdUseCase,
    private readonly getAddressByOwnerIdUseCase: GetAddressByOwnerIdUseCase,
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

    await this.createCaseLawyerUseCase.execute({
      caseId: caseEntity.id,
      lawyerId: user.id,
    });

    return CaseViewModel.toHttp(caseEntity);
  }

  @Get()
  async getAllCasesByLawyerId(@Request() request: AuthenticatedRequestModel) {
    const { user } = request;

    const cases = await this.getAllLawyerCasesUseCase.execute({
      lawyerId: user.id,
    });

    return Promise.all(
      cases.map(async (caseEntity) => {
        const [createdBy, lawyers, clients] = await Promise.all([
          this.getLawyerByIdUseCase.execute({
            lawyerId: caseEntity.createdById,
          }),
          this.getAllCaseLawyersUseCase.execute({ caseId: caseEntity.id }),
          this.getAllCaseClientsUseCase.execute({ caseId: caseEntity.id }),
        ]);

        return {
          ...CaseViewModel.toHttp(caseEntity),
          createdBy: LawyerViewModel.toHttp(createdBy),
          lawyers: lawyers.map(LawyerViewModel.toHttp),
          clients: clients.map(ClientViewModel.toHttp),
        };
      }),
    );
  }

  @Get(':id')
  async getCaseById(@Param('id') id: string) {
    const caseEntity = await this.getCaseByIdUseCase.execute({ caseId: id });

    const [createdBy, lawyers, clients] = await Promise.all([
      this.getLawyerByIdUseCase.execute({ lawyerId: caseEntity.createdById }),
      this.getAllCaseLawyersUseCase.execute({ caseId: caseEntity.id }),
      this.getAllCaseClientsUseCase.execute({ caseId: caseEntity.id }),
    ]);

    return {
      ...CaseViewModel.toHttp(caseEntity),
      createdBy: LawyerViewModel.toHttp(createdBy),
      lawyers: lawyers.map(LawyerViewModel.toHttp),
      clients: await Promise.all(
        clients.map(async (client) => {
          const address = await this.getAddressByOwnerIdUseCase.execute({
            ownerId: client.id,
          });
          return {
            ...ClientViewModel.toHttp(client),
            address: AddressViewModel.toHttp(address),
          };
        }),
      ),
    };
  }

  @Get('all')
  async getAllCases() {
    const cases = await this.getAllCasesUseCase.execute();

    return cases.map((caseEntity) => CaseViewModel.toHttp(caseEntity));
  }
}
