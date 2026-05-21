import { Module } from '@nestjs/common';
import { CreateCategoriesController } from './create-categories/create-categories.controller';
import { UpdateCategoriesController } from './update-categories/update-categories.controller';
import { DeleteCategoriesController } from './delete-categories/delete-categories.controller';
import { FindAllCategoriesController } from './find-all-categories/find-all-categories.controller';
import { categoryProviders } from './provider/category.provider';
import { CreateUserService } from '../users/create-user/create-user.service';
import { UpdateUserService } from '../users/update-user/update-user.service';
import { DeleteUserService } from '../users/delete-user/delete-user.service';
import { FindAllUsersService } from '../users/find-all-users/find-all-users.service';

@Module({
  imports: [],
  controllers: [CreateCategoriesController,UpdateCategoriesController,DeleteCategoriesController,FindAllCategoriesController],
  providers: [...categoryProviders, CreateUserService,UpdateUserService,DeleteUserService,FindAllUsersService],
})
export class CategoriesModule {}
