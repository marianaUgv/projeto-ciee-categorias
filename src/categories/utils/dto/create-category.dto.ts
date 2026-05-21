import { IsNotEmpty, IsString, Length, IsOptional } from 'class-validator';

export class CreateCategoryDto {
  @IsString()
  @IsNotEmpty({ message: 'O nome da categoria não pode estar vazio.' })
  @Length(3, 100, { message: 'O nome deve ter entre 3 e 100 caracteres.' })
  name!: string;

  @IsString()
  @IsNotEmpty({ message: 'A cor é obrigatória.' })
  @Length(4, 7, { message: 'A cor deve ser um formato válido (ex: #FFF ou #FFFFFF).' })
  color!: string;

  @IsString()
  @IsOptional()
  icon?: string;
}