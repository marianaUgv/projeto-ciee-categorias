import { Controller, Delete, Param } from '@nestjs/common';
import { DeleteAccountService } from './delete-account.service';
import { ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';

@Controller('accounts')
export class DeleteAccountController {
    constructor(
        private readonly deleteAccountService: DeleteAccountService
    ) { }
    @Delete('delete/:id')
    @ApiOperation({ summary: 'Remover uma conta bancária' })
    @ApiParam({ name: 'id', description: 'ID da conta bancária', type: Number })
    @ApiResponse({ status: 200, description: 'Conta removida com sucesso.' })
    @ApiResponse({ status: 404, description: 'Conta não encontrada.' })
    async delete(@Param('id') id: number) {
        return await this.deleteAccountService.execute(id)
    }
}
