import { Controller, Get, Inject } from '@nestjs/common';
import { FindAllCategoriesService } from './find-all-categories.service';
import { Category } from '../utils/category.entity';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('categories')
export class FindAllCategoriesController {
  constructor(private readonly findAllCategoriesService: FindAllCategoriesService) { }

  @ApiOperation({ summary: 'Listar todas as categorias cadastradas' })
  @ApiResponse({ status: 200, description: 'Lista retornada com sucesso.', type: [Category] })
  @Get('find-all')
  findAll() {
    return this.findAllCategoriesService.execute();
  }

}
