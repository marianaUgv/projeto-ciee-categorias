import { Body, Controller, Post } from '@nestjs/common';
import { CreateCategoriesService } from './create-categories.service';
import { CreateCategoryDto } from '../utils/dto/create-category.dto';

@Controller('create-categories')
export class CreateCategoriesController {
    constructor(private readonly createCategoriesService: CreateCategoriesService) { }
    @Post()
    create(@Body() createCategoryDto: CreateCategoryDto) {
        return this.createCategoriesService.execute(createCategoryDto);
    }
}
