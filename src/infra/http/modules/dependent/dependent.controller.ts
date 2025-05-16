import { Body, Controller, Post } from '@nestjs/common';
import { CreateDependentUseCase } from 'src/modules/dependent/use-cases/create-dependent.use-case';
import { CreateDependentDto } from './dtos/create-dependent.dto';
import { DependentViewModel } from './view-model/dependent.view-model';

@Controller('dependent')
export class DependentController {
  constructor(
    private readonly createDependentUseCase: CreateDependentUseCase,
  ) {}

  @Post()
  async createDependent(@Body() body: CreateDependentDto) {
    const dependent = await this.createDependentUseCase.execute(body);
    return DependentViewModel.toHttp(dependent);
  }
}
