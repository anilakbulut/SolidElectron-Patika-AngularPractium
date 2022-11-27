import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../module/product/product.model';

@Pipe({
  name: 'textFilter'
})
export class TextPipe implements PipeTransform {

  transform(product: Product[],text:string): Product[] {
    text = text.toLowerCase();

    return text? product.filter(a => 
      a.product_name.toLowerCase().indexOf(text)!==-1
      )
      : product;
  }
}
