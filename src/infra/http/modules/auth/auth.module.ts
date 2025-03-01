import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { LocalStrategy } from 'src/modules/auth/strategies/local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from 'src/modules/auth/strategies/jwt.strategy';
import { SignInValidateDtoMiddleware } from './middlewares/sign-in-validate-dto.middleware';
import { ValidateLawyerUseCase } from 'src/modules/auth/use-cases/validate-lawyer.use-case';
import { SignInUseCase } from 'src/modules/auth/use-cases/sign-in-use-case';
import { DatabaseModule } from 'src/infra/database/database.module';

@Module({
  imports: [
    DatabaseModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: process.env.JWT_EXPIRE },
    }),
  ],
  controllers: [AuthController],
  providers: [LocalStrategy, JwtStrategy, ValidateLawyerUseCase, SignInUseCase],
})
export class AuthModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(SignInValidateDtoMiddleware).forRoutes('/signIn');
  }
}
