import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../module/product/product.model';

@Pipe({
  name: 'CategoryPipe'
})
export class CategoryPipe implements PipeTransform {

  transform(product:Product[],category:string):Product[] {
    return category? product.filter( data => data.product_category == category) : product
  }

}
