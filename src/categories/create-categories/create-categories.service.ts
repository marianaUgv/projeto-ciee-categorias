import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Category } from '../utils/category.entity';
import { CreateCategoryDto } from '../utils/dto/create-category.dto';

@Injectable()
export class CreateCategoriesService {
    constructor(
        @Inject('CATEGORY_REPOSITORY')
        private categoryRepository: Repository<Category>,
    ) { }
    async execute(createCategoryDto: CreateCategoryDto): Promise<Category> {
    const category = this.categoryRepository.create(createCategoryDto);
    return await this.categoryRepository.save(category);
  }
}
