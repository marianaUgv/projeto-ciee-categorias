import { Controller, Get, Param } from '@nestjs/common';
import { FindCategoryByIdService } from './find-category-by-id.service';
import { ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';
import { Category } from '../utils/category.entity';

@Controller('categories')
export class FindCategoryByIdController {
    constructor(
        private readonly findAccountByIdService: FindCategoryByIdService
    ) { }
    @Get('find-by-id/:id')
    @ApiOperation({ summary: 'Buscar uma categoria pelo ID' })
    @ApiParam({ name: 'id', description: 'ID numérico da categoria', type: Number })
    @ApiResponse({ status: 200, description: 'Categoria encontrada.', type: Category })
    @ApiResponse({ status: 404, description: 'Categoria não encontrada.' })
    async findById(@Param('id') id: number) {
        return await this.findAccountByIdService.execute(id)
    }
}
