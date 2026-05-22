import { Repository } from "typeorm";
import { User } from "./utils/entity/user.entity";

export class UsersRepository {
    constructor(
        private readonly usersRepository: Repository<User>
    ){}
    async findAll(){
        return this.usersRepository.find()
    }
    async findById(id:number){
        return this.usersRepository.findOneBy({id})
    }
    async create(user: User){
        return this.usersRepository.create(user)
    }
    async update(user:User, updatedUser:User){
        return this.usersRepository.save(this.usersRepository.merge(user, updatedUser))
    }
    async delete(user:User){
        return this.usersRepository.remove(user)
    }
    //fazer um pra atualizar o saldo?
}