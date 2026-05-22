import { Injectable, NotFoundException } from '@nestjs/common';
import { AccountsRepository } from '../models/account.repository';

@Injectable()
export class DeleteAccountService {
     constructor(
            private readonly accountRepository: AccountsRepository
        ){}
        async execute(id:number){
            const account = await  this.accountRepository.findById(id);
            if(!account) return NotFoundException;
            return this.accountRepository.delete(account)
        }

}
