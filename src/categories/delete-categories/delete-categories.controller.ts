import { Controller, Delete,  Param, ParseIntPipe } from '@nestjs/common';
import { DeleteCategoriesService } from './delete-categories.service';

@Controller('delete-categories')
export class DeleteCategoriesController {
    constructor(private readonly deleteCategoriesService: DeleteCategoriesService) { }
    @Delete(':id')
    remove(@Param('id') id: number) {
        return this.deleteCategoriesService.execute(id);
    }
}
