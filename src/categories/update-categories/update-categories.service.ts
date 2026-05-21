import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Category } from '../utils/category.entity';
import { UpdateCategoryDto } from '../utils/dto/update-category.dto';

@Injectable()
export class UpdateCategoriesService {
    constructor(
        @Inject('CATEGORY_REPOSITORY')
        private categoryRepository: Repository<Category>,
    ) { }
    async execute(id: number, updateCategoryDto: UpdateCategoryDto) {
    const category = await this.categoryRepository.findOne({where:{id}}); 
    if(!category) return new NotFoundException
    const updatedCategory = this.categoryRepository.merge(category, updateCategoryDto);
    return await this.categoryRepository.save(updatedCategory);
  }
}
