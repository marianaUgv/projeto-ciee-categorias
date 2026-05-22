import { Repository } from "typeorm";
import { Accounts } from "./entity/account.entity";

export class AccountsRepository {
    constructor(
        private readonly accountsRepository: Repository<Accounts>
    ){}
    async findAll(){
        return await this.accountsRepository.find()
    }
    async findById(id:number){
        return await this.accountsRepository.findOneBy({id})
    }
    async create(account: Accounts){
        return await this.accountsRepository.create(account)
    }
    async update(account:Accounts, updatedAccount:Accounts){
        return await this.accountsRepository.save(this.accountsRepository.merge(account, updatedAccount))
    }
    async delete(account:Accounts){
        return await this.accountsRepository.remove(account)
    }
    //fazer um pra atualizar o saldo?
}