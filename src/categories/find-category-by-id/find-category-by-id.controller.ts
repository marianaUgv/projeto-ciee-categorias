import { Controller, Get, Param } from '@nestjs/common';
import { FindCategoryByIdService } from './find-category-by-id.service';

@Controller('categories')
export class FindCategoryByIdController {
    constructor(
        private readonly findAccountByIdService: FindCategoryByIdService
    ) { }
    @Get('find-by-id/:id')
    async findById(@Param('id')id:number) {
        return await this.findAccountByIdService.execute(id)
    }
}
