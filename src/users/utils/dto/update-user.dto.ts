import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class UpdateUserDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  name?: string;

  @IsEmail()
  email?: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(6, { message: 'A senha deve conter pelo menos 6 caracteres.' })
  password?: string;
}