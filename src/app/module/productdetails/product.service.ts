import { Injectable } from '@angular/core';
import { Product } from '../product/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  product : Product[] = []

  getDetails(product: Product[]){
    this.product = product
  }
}
