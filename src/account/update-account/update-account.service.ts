import { Injectable, NotFoundException } from '@nestjs/common';
import { AccountsRepository } from '../models/user.repository';
import { Accounts } from '../models/entity/account.entity';
import { UpdateAccountDto } from '../models/dto/update-account.dto';

@Injectable()
export class UpdateAccountService {
    constructor(
        private readonly accountRepository: AccountsRepository
    ){}
    async execute(id:number, updatedAccountDto: UpdateAccountDto){
        const account = await  this.accountRepository.findById(id);
        if(!account) return NotFoundException;
        const updatedAccount :Accounts= new Accounts();
        updatedAccount.name =  updatedAccountDto.name ?? account.name;
        updatedAccount.type = updatedAccountDto.type ?? account.type;
        updatedAccount.initial_Balance = updatedAccount.initial_Balance ?? account.initial_Balance;
        return this.accountRepository.update(account, updatedAccount)
    }
}
