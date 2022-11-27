import { Injectable } from '@angular/core';
import { Product } from '../module/product/product.model';
import { User } from './whichUserLogin.model';

@Injectable({
  providedIn: 'root'
})
export class WhichUserLoginService {
  
  constructor() { }

  loginUser: User ={}
  product : Product = {}

  allProduct:Product[] =[]

  getAllData(product : Product[]){
    this.allProduct = product;
  }
  sendAllData(){
    return this.allProduct;
  }
  whichUser(user : User){
    this.loginUser = user
  }

  sendUser(){
    return this.loginUser
  }

  logoutReset(){
    this.loginUser= {}
  }


  sendProduct(){
    return this.product;
  }
}
