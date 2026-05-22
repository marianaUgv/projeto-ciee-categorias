import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAccountDto } from '../models/dto/create-account.dto';
import { AccountsRepository } from '../models/user.repository';
import { Accounts } from '../models/entity/account.entity';

@Injectable()
export class CreateAccountService {
    constructor(
            private readonly accountRepository: AccountsRepository
        ){}
        async execute( createAccountDto: CreateAccountDto){
            const newAccount :Accounts= new Accounts();
            newAccount.name =  createAccountDto.name 
            newAccount.type = createAccountDto.type 
            newAccount.initial_Balance =  createAccountDto.initial_balance
            return this.accountRepository.create(newAccount)
        }
}
