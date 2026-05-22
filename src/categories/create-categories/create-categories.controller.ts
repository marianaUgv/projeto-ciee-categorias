import { Body, Controller, Post } from '@nestjs/common';
import { CreateCategoriesService } from './create-categories.service';
import { CreateCategoryDto } from '../utils/dto/create-category.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Category } from '../utils/category.entity';

@Controller('categories')
export class CreateCategoriesController {
    constructor(private readonly createCategoriesService: CreateCategoriesService) { }
    @Post('create')
    @ApiOperation({ summary: 'Criar uma nova categoria de transação' })
    @ApiResponse({ status: 201, description: 'Categoria criada com sucesso.', type: Category })
    @ApiResponse({ status: 400, description: 'Dados de requisição inválidos.' })
    create(@Body() createCategoryDto: CreateCategoryDto) {
        return this.createCategoriesService.execute(createCategoryDto);
    }
}
