import { Injectable, NotFoundException } from '@nestjs/common';
import { CategoriesRepository } from '../categories.repository';

@Injectable()
export class FindCategoryByIdService {
    constructor(
        private readonly categoryRepository: CategoriesRepository
    ){}
    async execute(id:number){
        const category = await this.categoryRepository.findById(id)
        if(!category) return NotFoundException;
        return category;
    }
}
