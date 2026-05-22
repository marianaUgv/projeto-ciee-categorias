import { Injectable, NotFoundException } from '@nestjs/common';
import { AccountsRepository } from '../models/account.repository';
import { Accounts } from '../models/entity/account.entity';
import { UpdateAccountDto } from '../models/dto/update-account.dto';

@Injectable()
export class UpdateAccountService {
    constructor(
        private readonly accountRepository: AccountsRepository
    ){}
    async execute(id:number, updatedAccountDto: UpdateAccountDto){
        const account = await  this.accountRepository.findById(id);
        if(!account) throw new NotFoundException(`Conta com ID ${id} não encontrada.`);
        const updatedAccount :Accounts= new Accounts();
        updatedAccount.name =  updatedAccountDto.name ?? account.name;
        updatedAccount.type = updatedAccountDto.type ?? account.type;
        updatedAccount.initialBalance = updatedAccount.initialBalance ?? account.initialBalance;
        return this.accountRepository.update(account, updatedAccount)
    }
}
