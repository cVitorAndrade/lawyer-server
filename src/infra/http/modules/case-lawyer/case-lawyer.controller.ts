import { Body, Controller, Post } from '@nestjs/common';
import { CreateCaseLawyersDto } from './dtos/create-case-lawyers.dto';
import { CreateCaseLawyerUseCase } from 'src/modules/case-lawyer/use-cases/create-case-lawyer.use-case';
import { CaseLawyerViewModel } from './view-model/case-lawyer.view-model';

@Controller('case-lawyer')
export class CaseLawyerController {
  constructor(private createCaseLawyerUseCase: CreateCaseLawyerUseCase) {}

  @Post()
  async createCaseLawyers(@Body() body: CreateCaseLawyersDto) {
    const { caseId, lawyers } = body;

    const addLawyers = lawyers.map((lawyer) =>
      this.createCaseLawyerUseCase.execute({
        caseId,
        lawyerId: lawyer.id,
      }),
    );

    const caseLawyers = await Promise.all(addLawyers);

    return caseLawyers.map((caseLawyer) =>
      CaseLawyerViewModel.toHttp(caseLawyer),
    );
  }
}
