import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Category } from '../utils/category.entity';

@Injectable()
export class DeleteCategoriesService {
    constructor(
        @Inject('CATEGORY_REPOSITORY')
        private categoryRepository: Repository<Category>,
    ) { }
    async execute(id: number): Promise<{ message: string }> {
    const category = await this.categoryRepository.findOne({where:{id}})
    if(!category) return new NotFoundException
    await this.categoryRepository.remove(category);
    return { message: `Categoria '${category.name}' removida com sucesso.` };
  }
}
