import { Type } from 'class-transformer';
import {  IsEnum, IsNotEmpty, IsNumber, IsString, Length, Min, MinLength, ValidateNested } from 'class-validator';
import { User } from '../../../users/utils/entity/user.entity';
import { ApiProperty } from '@nestjs/swagger';
import { AccountType } from '../../types/account-type.enum';

export class CreateAccountDto {
  @ApiProperty({ example: 'Conta Corrente Itaú', description: 'Nome identificador da conta' })
  @IsString()
  @IsNotEmpty({ message: 'O nome da conta é obrigatório.' })
  @Length(3, 120, { message: 'O nome deve ter entre 3 e 120 caracteres.' })
  name!: string;

  @ApiProperty({ example: AccountType.CHECKING, enum: AccountType, description: 'Tipo de conta' })
  @IsEnum(AccountType, { message: 'Tipo de conta inválido.' })
  @IsNotEmpty({ message: 'O tipo da conta é obrigatório.' })
  type!: string;

  @ApiProperty({ example: 250.00, description: 'Saldo inicial (pode ser 0)' })
  @IsNumber({}, { message: 'O saldo inicial deve ser um número.' })
  @Min(0, { message: 'O saldo inicial não pode ser negativo.' })
  initial_balance!: number;

  @ApiProperty({ example: 1, description: 'ID do usuário proprietário desta conta' })
  @IsNumber({}, { message: 'O ID do usuário deve ser um número.' })
  @IsNotEmpty({ message: 'A conta precisa estar vinculada a um usuário.' })
  userId!: number;
}