import { Controller, Get } from '@nestjs/common';
import { CategoriesService } from 'src/services/categories/categories.service';

@Controller('category')
export class CategoriesController {

    constructor(private readonly categoryService: CategoriesService) {}
    
    @Get("/parent-categories")
    getParentCategories(): any {
      return this.categoryService.getCategories();
    }

}
