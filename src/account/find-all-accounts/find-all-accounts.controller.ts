import { Controller, Get } from '@nestjs/common';
import { FindAllAccountsService } from './find-all-accounts.service';
import { Accounts } from '../models/entity/account.entity';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('accounts')
export class FindAllAccountsController {
    constructor(
        private readonly findAllAccountsService: FindAllAccountsService
    ) { }
    @Get('find-all')
    @ApiOperation({ summary: 'Listar todas as contas bancárias' })
    @ApiResponse({ status: 200, description: 'Lista de contas retornada com sucesso.', type: [Accounts] })
    async findAll() {
        return await this.findAllAccountsService.execute()
    }
}
