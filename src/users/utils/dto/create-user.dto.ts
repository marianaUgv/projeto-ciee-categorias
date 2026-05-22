import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @ApiProperty({ example: 'Mariana Beatriz Pinheiro', description: 'Nome completo do usuário' })
  name!: string;

  @IsEmail()
  @ApiProperty({ example: 'mariana@email.com', description: 'E-mail único' })
  email!: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(6, { message: 'A senha deve conter pelo menos 6 caracteres.' })
   @ApiProperty({ description: 'senha do usuário' })
  password!: string;
}