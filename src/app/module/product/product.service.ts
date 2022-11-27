import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url= "http://localhost:3300/product"
  urlDetail = "http://localhost:3300/cart"
  
  constructor(private http: HttpClient) { }

  getAllProduct(): Observable<Product[]>{
    return this.http.get<Product[]>(this.url)
  }

  product : Product = {}

  getDetails(product: Product){
    this.product = product
  }

  sendProduct(){
    return this.product;
  }
  
}
