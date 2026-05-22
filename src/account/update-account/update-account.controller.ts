import { Body, Controller, Param, Patch } from '@nestjs/common';
import { UpdateAccountService } from './update-account.service';
import { ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';
import { AccountModule } from '../account.module';

@Controller('accounts')
export class UpdateAccountController {
    constructor(
        private readonly updateUserService: UpdateAccountService
    ) { }
    @Patch('update/:id')
    @ApiOperation({ summary: 'Atualizar dados de uma conta bancária' })
    @ApiParam({ name: 'id', description: 'ID da conta bancária', type: Number })
    @ApiResponse({ status: 200, description: 'Conta atualizada com sucesso.', type: AccountModule })
    @ApiResponse({ status: 404, description: 'Conta não encontrada.' })
    update(@Param('id') id: number, @Body() updateAccount) {
        return this.updateUserService.execute(id, updateAccount)
    }
}
