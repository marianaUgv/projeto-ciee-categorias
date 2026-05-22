import { Body, Controller, Param, Patch } from '@nestjs/common';
import { UpdateAccountService } from './update-account.service';

@Controller('accounts')
export class UpdateAccountController {
    constructor(
        private readonly updateUserService: UpdateAccountService
    ){}
    @Patch('update/:id')
    update(@Param('id')id:number, @Body()updateAccount){
        return this.updateUserService.execute(id, updateAccount)
    }
}
