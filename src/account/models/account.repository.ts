import { Repository } from "typeorm";
import { Accounts } from "./entity/account.entity";

export class AccountsRepository {
    constructor(
        private readonly accountsRepository: Repository<Accounts>
    ){}
    async findAll(){
        return this.accountsRepository.find()
    }
    async findById(id:number){
        return this.accountsRepository.findOneBy({id})
    }
    async create(account: Accounts){
        return this.accountsRepository.create(account)
    }
    async update(account:Accounts, updatedAccount:Accounts){
        return this.accountsRepository.save(this.accountsRepository.merge(account, updatedAccount))
    }
    async delete(account:Accounts){
        return this.accountsRepository.remove(account)
    }
    //fazer um pra atualizar o saldo?
}