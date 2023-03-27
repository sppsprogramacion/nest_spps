import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity';
import { UsuarioService } from './usuario.service';
import { UsuarioController } from './usuario.controller';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            Usuario
        ])
      ],
      exports: [
        UsuarioService
      ],
    providers: [UsuarioService],
    controllers: [UsuarioController]
})
export class UsuarioModule {
    
}
