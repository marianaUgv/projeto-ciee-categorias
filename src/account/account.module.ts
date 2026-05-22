import { Module } from '@nestjs/common';
import { CreateAccountController } from './create-account/create-account.controller';
import { UpdateAccountController } from './update-account/update-account.controller';
import { DeleteAccountController } from './delete-account/delete-account.controller';
import { FindAllAccountsController } from './find-all-accounts/find-all-accounts.controller';
import { FindAccountByIdService } from './find-account-by-id/find-account-by-id.service';
import { FindAccountByIdController } from './find-account-by-id/find-account-by-id.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Accounts } from './models/entity/account.entity';

@Module({
    imports:[TypeOrmModule.forFeature(Accounts)],
    controllers: [CreateAccountController,UpdateAccountController,DeleteAccountController,FindAllAccountsController,FindAccountByIdController]
})
export class AccountModule {}
