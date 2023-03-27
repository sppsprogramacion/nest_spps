import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { UsuarioModule } from 'src/usuario/usuario.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { LocalStrategy } from './strategies/local.strategy';

@Module({
  imports:[
    UsuarioModule,
    PassportModule
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    LocalStrategy
  ]
})
export class AuthModule {}
