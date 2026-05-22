import { Body, Controller, Post } from '@nestjs/common';
import { CreateAccountService } from './create-account.service';
import { CreateAccountDto } from '../models/dto/create-account.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Accounts } from '../models/entity/account.entity';

@Controller('accounts')
export class CreateAccountController {
    constructor(
        private readonly createAccountService: CreateAccountService
    ) { }
    @Post('create')
    @ApiOperation({ summary: 'Cadastrar uma nova conta bancária/carteira' })
    @ApiResponse({ status: 201, description: 'Conta criada com sucesso.', type: Accounts })
    @ApiResponse({ status: 400, description: 'Dados de requisição inválidos.' })
    async create(@Body() createAccountDto: CreateAccountDto) {
        return await this.createAccountService.execute(createAccountDto)
    }
}
