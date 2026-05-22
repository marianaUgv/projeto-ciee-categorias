import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './database/database.module';
import { CategoriesModule } from './categories/categories.module';
import { AccountModule } from './account/account.module';
import { CreateAccountController } from './account/create-account/create-account.controller';
import { CreateAccountService } from './account/create-account/create-account.service';
import { UpdateAccountController } from './account/update-account/update-account.controller';
import { UpdateAccountService } from './account/update-account/update-account.service';
import { DeleteAccountController } from './account/delete-account/delete-account.controller';
import { FindAllAccountsController } from './account/find-all-accounts/find-all-accounts.controller';
import { DeleteAccountService } from './account/delete-account/delete-account.service';
import { FindAllAccountsService } from './account/find-all-accounts/find-all-accounts.service';
import { FindAccountByIdService } from './account/find-account-by-id/find-account-by-id.service';
import { FindAccountByIdController } from './account/find-account-by-id/find-account-by-id.controller';
import { UpdateBalanceController } from './account/update-balance/update-balance.controller';
import { UpdateBalanceService } from './account/update-balance/update-balance.service';

@Module({
  imports: [UsersModule, DatabaseModule, CategoriesModule, UsersModule, AccountModule],
  controllers: [AppController, CreateAccountController, UpdateAccountController, DeleteAccountController, FindAllAccountsController, FindAccountByIdController, UpdateBalanceController],
  providers: [AppService, CreateAccountService, UpdateAccountService, DeleteAccountService, FindAllAccountsService, FindAccountByIdService, UpdateBalanceService],
})
export class AppModule {}
