import { Controller, Get } from '@nestjs/common';
import { FindAllUsersService } from './find-all-users.service';

@Controller('find-all-users')
export class FindAllUsersController {
    constructor(private readonly findAllUsersService: FindAllUsersService) { }
    @Get()
    async findAll() {
        return await this.findAllUsersService.execute();
    }
}
