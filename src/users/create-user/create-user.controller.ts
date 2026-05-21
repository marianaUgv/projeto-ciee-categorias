import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserService } from './create-user.service';
import { CreateUserDto } from '../utils/dto/create-user.dto';

@Controller('create-user')
export class CreateUserController {
    constructor(private readonly usersService: CreateUserService) { }
    @Post()
    async create(@Body() createUserDto: CreateUserDto) {
        return await this.usersService.execute(createUserDto);
    }
}
