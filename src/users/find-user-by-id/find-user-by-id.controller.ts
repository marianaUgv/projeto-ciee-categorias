import { Controller, Get, Param } from '@nestjs/common';
import { FindUserByIdService } from './find-user-by-id.service';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from '../utils/entity/user.entity';
@ApiTags('Usuários')
@Controller('users')
export class FindUserByIdController {
    constructor(
        private readonly findUserByIdService: FindUserByIdService
    ) { }
    @Get('find-by-id/:id')
    @ApiOperation({ summary: 'Buscar usuário por ID' })
    @ApiParam({ name: 'id', description: 'ID do usuário', type: Number })
    @ApiResponse({ status: 200, description: 'Usuário encontrado.', type: User })
    @ApiResponse({ status: 404, description: 'Usuário não encontrado.' })
    async findById(@Param('id') id: number) {
        return await this.findUserByIdService.execute(id)
    }
}
