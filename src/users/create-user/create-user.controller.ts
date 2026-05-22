import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserService } from './create-user.service';
import { CreateUserDto } from '../utils/dto/create-user.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('users')
export class CreateUserController {
    constructor(private readonly usersService: CreateUserService) { }
    @ApiOperation({ summary: 'Criar um novo usuário' })
    @ApiResponse({ status: 201, description: 'Usuário criado com sucesso.' })
    @ApiResponse({ status: 400, description: 'Dados inválidos.' })
    @ApiResponse({ status: 409, description: 'E-mail já cadastrado.' })
    @Post()
    async create(@Body() createUserDto: CreateUserDto) {
        return await this.usersService.execute(createUserDto);
    }
}
