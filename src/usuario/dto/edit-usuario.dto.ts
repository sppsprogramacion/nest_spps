//import { PartialType } from "@nestjs/swagger";
import { PartialType } from '@nestjs/mapped-types';
import { CreateUsuarioDto } from './create-usuario.dto';

export class EditUsuarioDto extends PartialType(CreateUsuarioDto){}