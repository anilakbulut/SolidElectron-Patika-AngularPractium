import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WhichUserLoginService } from 'src/app/services/whichUserLogin.service';
import { User } from '../login/login.model';
import { Product } from '../product/product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private whichUserLogin:WhichUserLoginService,
    private _router : Router
    ) { }

  ngOnInit(): void {
    this.whichUsersCart()
    this.getAllProduct()
  }
  
  user:User = {}
  product: Product = {}
  productList: Product [] = []
  
  allProductList: Product[] = []

  whichUsersCart(){
    this.user = this.whichUserLogin.sendUser()
  }

  getAllProduct(){
    this.allProductList = this.whichUserLogin.sendAllData()
  }

  onClickMainPage(){
    this._router.navigate(['/layout'])

  }
}
