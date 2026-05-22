import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, Length, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty({ message: 'O nome é obrigatório.' })
  @Length(3, 120, { message: 'O nome deve ter entre 3 e 120 caracteres.' })
  @ApiProperty({ example: 'Mariana Beatriz Pinheiro', description: 'Nome completo do usuário' })
  name!: string;

  @IsEmail({}, { message: 'Insira um e-mail válido.' })
  @IsNotEmpty({ message: 'O e-mail é obrigatório.' })
  @ApiProperty({ example: 'mariana@email.com', description: 'E-mail único' })
  email!: string;

  @IsString()
  @IsNotEmpty({ message: 'A senha é obrigatória.' })
  @MinLength(6, { message: 'A senha deve conter pelo menos 6 caracteres.' })
  @ApiProperty({example: 'senha', description: 'senha do usuário' })
  password!: string;
}