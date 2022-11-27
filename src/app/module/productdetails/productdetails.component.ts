import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product/product.model';
import { ProductService } from '../product/product.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.scss']
})
export class ProductdetailsComponent implements OnInit {

  constructor(private productService: ProductService,private _router:Router) { }

  ngOnInit(): void {
    this.getProduct()
  }

  product: Product={}

  getProduct(){
    this.product = this.productService.sendProduct()
  }

  onClickMainPage(){
    this._router.navigate(['/layout'])

  }

}
