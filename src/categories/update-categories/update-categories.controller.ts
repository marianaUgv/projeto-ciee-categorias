import { Body, Controller, Param, Patch } from '@nestjs/common';
import { UpdateCategoriesService } from './update-categories.service';
import { UpdateCategoryDto } from '../utils/dto/update-category.dto';
import { ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';
import { Category } from '../utils/category.entity';

@Controller('categories')
export class UpdateCategoriesController {
    constructor(private readonly updateCategoriesService: UpdateCategoriesService) { }

    @Patch('update/:id')
    @ApiOperation({ summary: 'Atualizar dados de uma categoria' })
    @ApiParam({ name: 'id', description: 'ID numérico da categoria', type: Number })
    @ApiResponse({ status: 200, description: 'Categoria atualizada com sucesso.', type: Category })
    @ApiResponse({ status: 404, description: 'Categoria não encontrada.' })
    update(
        @Param('id') id: number,
        @Body() updateCategoryDto: UpdateCategoryDto
    ) {
        return this.updateCategoriesService.execute(id, updateCategoryDto);
    }
}
