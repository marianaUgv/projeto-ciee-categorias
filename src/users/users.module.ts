import { Module } from '@nestjs/common';
import { CreateUserService } from './create-user/create-user.service';
import { UpdateUserService } from './update-user/update-user.service';
import { DeleteUserService } from './delete-user/delete-user.service';
import { FindAllUsersService } from './find-all-users/find-all-users.service';
import { CreateUserController } from './create-user/create-user.controller';
import { userProviders } from './provider/user.provider';
import { FindAllUsersController } from './find-all-users/find-all-users.controller';
import { DeleteUserController } from './delete-user/delete-user.controller';

@Module({
  imports: [],
  controllers: [CreateUserController,  FindAllUsersController, DeleteUserController],
  providers: [...userProviders,CreateUserService,UpdateUserService,DeleteUserService,FindAllUsersService ],
})
export class UsersModule {}
