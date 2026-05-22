import { Controller, Delete, Param} from '@nestjs/common';
import { DeleteCategoriesService } from './delete-categories.service';
import { ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';

@Controller('categories')
export class DeleteCategoriesController {
    constructor(private readonly deleteCategoriesService: DeleteCategoriesService) { }
    @Delete('delete/:id')
    @ApiOperation({ summary: 'Remover uma categoria existente' })
    @ApiParam({ name: 'id', description: 'ID numérico da categoria', type: Number })
    @ApiResponse({ status: 200, description: 'Categoria removida com sucesso.' })
    @ApiResponse({ status: 404, description: 'Categoria não encontrada.' })
    remove(@Param('id') id: number) {
        return this.deleteCategoriesService.execute(id);
    }
}
