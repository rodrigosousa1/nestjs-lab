import { usersProvider } from '../users/users.provider';
import { UsersModule } from '../users/users.module';
import { MiddlewaresConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import * as passport from 'passport';

import { AUTH_CONFIG } from './auth.config';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './passport/jwt.strategy';


@Module({
  components: [
    AuthService,
    JwtStrategy,
    usersProvider
  ],
  controllers: [AuthController]
})
export class AuthModule implements NestModule {
  public configure(consumer: MiddlewaresConsumer) {
    consumer
      .apply(passport.authenticate('jwt', AUTH_CONFIG.jwtAuth.jwtSession))
      .forRoutes({ path: '/users', method: RequestMethod.ALL });
  }
}
