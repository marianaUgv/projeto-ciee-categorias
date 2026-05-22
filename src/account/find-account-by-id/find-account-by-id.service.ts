import { Injectable, NotFoundException } from '@nestjs/common';
import { AccountsRepository } from '../models/user.repository';

@Injectable()
export class FindAccountByIdService {
    constructor(
        private readonly accountRepository: AccountsRepository
    ) { }
    async execute (id:number){
        const account = await this.accountRepository.findById(id)
        if(!account) return NotFoundException;
        return account;
    }
}
