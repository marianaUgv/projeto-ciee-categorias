import { Body, Controller, Post } from '@nestjs/common';
import { CreateAccountService } from './create-account.service';
import { CreateAccountDto } from '../models/dto/create-account.dto';

@Controller('accounts')
export class CreateAccountController {
    constructor(
        private readonly createAccountService: CreateAccountService
    ){}
    @Post('create')
    async create(@Body() createAccountDto: CreateAccountDto){
        return await this.createAccountService.execute(createAccountDto)
    }
}
