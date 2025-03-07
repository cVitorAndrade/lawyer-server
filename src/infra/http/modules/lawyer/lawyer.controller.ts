import {
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  Request,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { CreateLawyerDto } from './dtos/create-lawyer.dto';
import { CreateLawyerUseCase } from 'src/modules/lawyer/use-cases/create-lawyer.use-case';
import { Public } from '../auth/decorators/isPublic';
import { AuthenticatedRequestModel } from '../auth/models/authenticated-request.model';
import { GetLawyerByIdUseCase } from 'src/modules/lawyer/use-cases/get-lawyer-by-id.use-case';
import { LawyerViewModel } from './view-model/lawyer.view-model';
import { UpdateLawyerDto } from './dtos/update-lawyer.dto';
import { UpdateLawyerUseCase } from 'src/modules/lawyer/use-cases/update-lawyer.use-case';
import { UpdateLawyerAvatarUseCase } from 'src/modules/lawyer/use-cases/update-lawyer-avatar.use-case';
import { UploadFileDto } from '../upload/dtos/upload-file.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { DeleteLawyerAvatarImageUseCase } from 'src/modules/lawyer/use-cases/delete-lawyer-avatar-image.use-case';
import { GetAllLawyersUseCase } from 'src/modules/lawyer/use-cases/get-all-lawyers.use-case';

@Controller('lawyer')
export class LawyerController {
  constructor(
    private createLawyerUseCase: CreateLawyerUseCase,
    private getLawyerByIdUseCase: GetLawyerByIdUseCase,
    private updateLawyerUseCase: UpdateLawyerUseCase,
    private updateLawyerAvatarUseCase: UpdateLawyerAvatarUseCase,
    private deleteAvatarImageUseCase: DeleteLawyerAvatarImageUseCase,
    private getAllLawyersUseCase: GetAllLawyersUseCase,
  ) {}

  @Post()
  @Public()
  async createLawyer(@Body() body: CreateLawyerDto) {
    const lawyer = await this.createLawyerUseCase.execute(body);
    return LawyerViewModel.toHttp(lawyer);
  }

  @Get()
  async getLawyer(@Request() request: AuthenticatedRequestModel) {
    const { user } = request;

    const lawyer = await this.getLawyerByIdUseCase.execute({
      lawyerId: user.id,
    });

    return LawyerViewModel.toHttp(lawyer);
  }

  @Get('all')
  async getAllLawyers() {
    const lawyers = await this.getAllLawyersUseCase.execute();
    return lawyers.map((lawyer) => LawyerViewModel.toHttp(lawyer));
  }

  @Patch()
  async updateLawyer(
    @Request() request: AuthenticatedRequestModel,
    @Body() body: UpdateLawyerDto,
  ) {
    const { user } = request;
    const { avatar, email, name, password, telephone, username } = body;

    const lawyer = await this.updateLawyerUseCase.execute({
      lawyerId: user.id,
      name,
      email,
      avatar,
      password,
      telephone,
      username,
    });

    return LawyerViewModel.toHttp(lawyer);
  }

  @Patch('avatar')
  @UseInterceptors(FileInterceptor('file'))
  async updateAvatar(
    @Request() request: AuthenticatedRequestModel,
    @UploadedFile() file: UploadFileDto,
  ) {
    const { user } = request;

    const lawyer = await this.updateLawyerAvatarUseCase.execute({
      file,
      lawyerId: user.id,
    });

    return LawyerViewModel.toHttp(lawyer);
  }

  @Delete('avatar')
  async deleteAvatar(@Request() request: AuthenticatedRequestModel) {
    const { user } = request;
    const lawyer = await this.deleteAvatarImageUseCase.execute({
      lawyerId: user.id,
    });
    return LawyerViewModel.toHttp(lawyer);
  }
}
