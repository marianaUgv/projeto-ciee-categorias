import { Controller, Get, Param } from '@nestjs/common';
import { FindAccountByIdService } from './find-account-by-id.service';
import { ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';
import { Accounts } from '../models/entity/account.entity';

@Controller('accounts')
export class FindAccountByIdController {
    constructor(
        private readonly findAccountByIdService: FindAccountByIdService
    ) { }
    @Get('find-by-id/:id')
    @ApiOperation({ summary: 'Buscar uma conta específica pelo ID' })
    @ApiParam({ name: 'id', description: 'ID da conta bancária', type: Number })
    @ApiResponse({ status: 200, description: 'Conta encontrada.', type: Accounts })
    @ApiResponse({ status: 404, description: 'Conta não encontrada.' })
    async findById(@Param('id') id: number) {
        return await this.findAccountByIdService.execute(id)
    }
}
