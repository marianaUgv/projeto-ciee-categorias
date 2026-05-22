import { Repository } from "typeorm";
import { User } from "./utils/entity/user.entity";

export class UsersRepository {
    constructor(
        private readonly usersRepository: Repository<User>
    ){}
    async findAll(){
        return await this.usersRepository.find()
    }
    async findById(id:number){
        return await this.usersRepository.findOneBy({id})
    }
    async create(user: User){
        return await this.usersRepository.create(user)
    }
    async update(user:User, updatedUser:User){
        return await this.usersRepository.save(this.usersRepository.merge(user, updatedUser))
    }
    async delete(user:User){
        return await this.usersRepository.remove(user)
    }
    async findByEmail(email:string){
        return await this.usersRepository.find({where:{email}})
    }
}