import { Type } from 'class-transformer';
import {  IsNotEmpty, IsNumber, IsString, MinLength, ValidateNested } from 'class-validator';
import { User } from '../../../users/utils/entity/user.entity';

export class CreateAccountDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  name!: string;

  @IsString()
  type!: string;

  @IsNumber()
  @IsNotEmpty()
  initial_balance!: number;

  @ValidateNested()
  @Type(()=> User)
  user!: User;
}