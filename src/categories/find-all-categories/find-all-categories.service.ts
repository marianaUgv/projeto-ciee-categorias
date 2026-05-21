import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Category } from '../utils/category.entity';

@Injectable()
export class FindAllCategoriesService {
    constructor(
        @Inject('CATEGORY_REPOSITORY')
        private categoryRepository: Repository<Category>,
    ) { }
    async execute(): Promise<Category[]> {
        return await this.categoryRepository.find({
            order: { name: 'ASC' },
        });
    }
}
