import { Body, Controller, Param, Patch } from '@nestjs/common';
import { UpdateBalanceService } from './update-balance.service';
import { UpdateBalanceDto } from '../models/dto/update-balance.dto';

@Controller('accounts')
export class UpdateBalanceController {
    constructor(
        private readonly updateBalanceService : UpdateBalanceService
    ){}
    @Patch('update-balance/:id')
    async updateBalance  (@Param('id') id:number, @Body() balance: UpdateBalanceDto) {
        return await this.updateBalanceService.execute(id, balance)
    }
}
