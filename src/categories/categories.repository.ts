import { Repository } from "typeorm"
import { Category } from "./utils/category.entity"

export class CategoriesRepository{
    constructor(
            private readonly categoryRepository: Repository<Category>
        ){}
        async findAll(){
            return this.categoryRepository.find()
        }
        async findById(id:number){
            return this.categoryRepository.findOneBy({id})
        }
        async create(category: Category){
            return this.categoryRepository.create(category)
        }
        async update(category:Category, updatedCategory:Category){
            return this.categoryRepository.save(this.categoryRepository.merge(category, updatedCategory))
        }
        async delete(category:Category){
            return this.categoryRepository.remove(category)
        }
}