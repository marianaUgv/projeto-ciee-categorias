import { Injectable, NotFoundException } from '@nestjs/common';
import { AccountsRepository } from '../models/user.repository';
import { UpdateBalanceDto } from '../models/dto/update-balance.dto';
import { Accounts } from '../models/entity/account.entity';

@Injectable()
export class UpdateBalanceService {
    constructor(
        private readonly accountRepository: AccountsRepository
    ) { }
    async execute(id: number, balanceDto: UpdateBalanceDto) {
        const account = await this.accountRepository.findById(id);
        if (!account) return NotFoundException;
        const updatedAccount: Accounts = new Accounts();
        updatedAccount.initial_Balance = balanceDto.initial_balance ?? account.initial_Balance;
        return this.accountRepository.update(account, updatedAccount)
    }
}
