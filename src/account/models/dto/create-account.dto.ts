import {  IsNotEmpty, IsNumber, IsString, MinLength } from 'class-validator';

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
}