import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Query,
  Delete,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDTO } from './dto/create-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  async getProducts() {
    const products = await this.productsService.getProducts();
    return products;
  }

  @Get(':productId')
  async getProduct(@Param('productId') productId) {
    const product = await this.productsService.getProduct(productId);
    return product;
  }

  @Post()
  async addProduct(@Body() createProductDTO: CreateProductDTO) {
    const product = await this.productsService.addProduct(createProductDTO);
    return product;
  }

  @Delete()
  async deleteProduct(@Query() query) {
    const products = await this.productsService.deleteProduct(query.productId);
    return products;
  }
}
