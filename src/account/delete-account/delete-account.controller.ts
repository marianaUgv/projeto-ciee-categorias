import { Controller, Delete, Param } from '@nestjs/common';
import { DeleteAccountService } from './delete-account.service';

@Controller('accounts')
export class DeleteAccountController {
    constructor(
        private readonly deleteAccountService: DeleteAccountService
    ){}
    @Delete('delete/:id')
    async delete(@Param('id') id: number){
        return await this.deleteAccountService.execute(id)
    }
}
