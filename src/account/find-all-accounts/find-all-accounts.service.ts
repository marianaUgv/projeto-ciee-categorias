import { Injectable } from '@nestjs/common';
import { AccountsRepository } from '../models/user.repository';

@Injectable()
export class FindAllAccountsService {
     constructor(
            private readonly accountRepository: AccountsRepository
        ) { }
        async execute (){
            return await this.accountRepository.findAll();
        }
}
