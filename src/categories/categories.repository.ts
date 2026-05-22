import { Repository } from "typeorm"
import { Category } from "./utils/category.entity"

export class CategoriesRepository{
    constructor(
            private readonly categoryRepository: Repository<Category>
        ){}
        async findAll(){
            return await this.categoryRepository.find()
        }
        async findById(id:number){
            return await this.categoryRepository.findOneBy({id})
        }
        async create(category: Category){
            return await this.categoryRepository.create(category)
        }
        async update(category:Category, updatedCategory:Category){
            return await this.categoryRepository.save(this.categoryRepository.merge(category, updatedCategory))
        }
        async delete(category:Category){
            return await this.categoryRepository.remove(category)
        }
}