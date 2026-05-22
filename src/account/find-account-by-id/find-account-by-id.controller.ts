import { Controller, Get } from '@nestjs/common';
import { FindAccountByIdService } from './find-account-by-id.service';

@Controller('accounts')
export class FindAccountByIdController {
    constructor(
        private readonly findAccountByIdService: FindAccountByIdService
    ){}
    @Get('find-by-id')
    async findById(id:number){
        return await this.findAccountByIdService.execute(id)
    }
}
