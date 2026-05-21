import { Controller, Get, Inject } from '@nestjs/common';
import { FindAllCategoriesService } from './find-all-categories.service';

@Controller('find-all-categories')
export class FindAllCategoriesController {
    constructor(private readonly findAllCategoriesService: FindAllCategoriesService) { }
@Get()
  findAll() {
    return this.findAllCategoriesService.execute();
  }

}
