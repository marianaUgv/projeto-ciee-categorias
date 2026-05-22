import { Controller, Get } from '@nestjs/common';
import { FindAllAccountsService } from './find-all-accounts.service';

@Controller('accounts')
export class FindAllAccountsController {
    constructor (
        private readonly findAllAccountsService : FindAllAccountsService
    ){}
    @Get('find-all')
    async findAll(){
        return await this.findAllAccountsService.execute()
    }
}
