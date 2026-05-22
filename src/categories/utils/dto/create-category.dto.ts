import { IsNotEmpty, IsString, Length, IsOptional, ValidateNested } from 'class-validator';
import { User } from '../../../users/utils/entity/user.entity';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCategoryDto {
  @ApiProperty({ example: 'Salário', description: 'Nome da categoria' })
  @IsString()
  @IsNotEmpty({ message: 'O nome da categoria não pode estar vazio.' })
  @Length(3, 100, { message: 'O nome deve ter entre 3 e 100 caracteres.' })
  name!: string;

  @ApiProperty({ example: '#2ECC71', description: 'Cor em formato Hexadecimal' })
  @IsString()
  @IsNotEmpty({ message: 'A cor é obrigatória.' })
  @Length(4, 7, { message: 'A cor deve ser um formato válido (ex: #FFF ou #FFFFFF).' })
  color!: string;

  @ApiProperty({ example: 'wallet', description: 'Ícone da categoria', required: false })
  @IsString()
  @IsOptional()
  icon?: string;

  @ValidateNested()
  @Type(() => User)
  user?: User;
}