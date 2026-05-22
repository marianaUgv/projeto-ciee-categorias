import { Controller, Get } from '@nestjs/common';
import { FindAllUsersService } from './find-all-users.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from '../utils/entity/user.entity';
@ApiTags('Usuarios')
@Controller('users')
export class FindAllUsersController {
    constructor(private readonly findAllUsersService: FindAllUsersService) { }
    @Get('find-all')
    @ApiOperation({ summary: 'Listar todos os usuários' })
    @ApiResponse({ status: 200, description: 'Lista de usuários retornada.', type: [User] })
    async findAll() {
        return await this.findAllUsersService.execute();
    }
}
