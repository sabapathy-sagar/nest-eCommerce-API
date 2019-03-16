import { Injectable, HttpException } from '@nestjs/common';
import { PRODUCTS } from '../mocks/products.mock';

@Injectable()
export class ProductsService {
  products = PRODUCTS;

  getProducts(): Promise<any> {
    return new Promise(resolve => {
      resolve(this.products);
    });
  }

  getProduct(productId): Promise<any> {
    let id = Number(productId);
    return new Promise(resolve => {
      const product = this.products.find(product => product.id === id);
      if (!product) {
        throw new HttpException('Product does not exist', 404);
      }
      resolve(product);
    });
  }

  addProduct(product): Promise<any> {
    return new Promise(resolve => {
      this.products.push(product);
      resolve(this.products);
    });
  }

  deleteProduct(productId): Promise<any> {
    let id = Number(productId);
    return new Promise(resolve => {
      let idx = this.products.findIndex(product => product.id === id);

      if (idx === -1) {
        throw new HttpException('Product does not exist', 404);
      }
      this.products.splice(idx, 1);
      resolve(this.products);
    });
  }
}
