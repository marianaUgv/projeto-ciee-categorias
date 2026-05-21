import { Body, Controller, Param, Patch } from '@nestjs/common';
import { UpdateCategoriesService } from './update-categories.service';
import { UpdateCategoryDto } from '../utils/dto/update-category.dto';

@Controller('update-categories')
export class UpdateCategoriesController {
    constructor(private readonly updateCategoriesService: UpdateCategoriesService) { }

    @Patch(':id')
    update(
        @Param('id') id: number,
        @Body() updateCategoryDto: UpdateCategoryDto
    ) {
        return this.updateCategoriesService.execute(id, updateCategoryDto);
    }
}
