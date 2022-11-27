import { ChangeDetectionStrategy, Component, Inject, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TuiAlertService } from '@taiga-ui/core';
import { WhichUserLoginService } from 'src/app/services/whichUserLogin.service';
import { Product } from './product.model';
import { ProductService } from './product.service';
@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent implements OnInit {

  constructor(@Inject(TuiAlertService) private readonly alerts: TuiAlertService,
  private productService : ProductService,
  private whichUserLogin: WhichUserLoginService,
  private _router : Router
  ) {
  }

  ngOnInit(): void {
    this.productService.getAllProduct().subscribe(
      data => {
      this.product = data;
      this.product = data;
      this.product = data;
      this.product = data;
      this.product = data;
      }
    )
  }

  detailProduct:Product = {}
  product: Product[] = []
  sendProduct: Product = {}
  sendAllData: Product[] = []

  getDetails(name:string,desc:string,price:string,path:string){
    this.detailProduct.product_name = name
    this.detailProduct.product_desc = desc
    this.detailProduct.product_price = price
    this.detailProduct.product_path = path

    this.productService.getDetails(this.detailProduct)

    this.detailProduct = {}
    this._router.navigate(['productdetails']);

  }



  text="" // filtertext

  readonly elektronik = {
    text: `Elektronik`,
    icon: `tuiIconCard`,
  }

  readonly sporUrunleri = {
    text: `Spor Ürünleri`,
    icon: `tuiIconCard`,
  }

  readonly kisiselBakim = {
    text: `Kişisel Bakım`,
    icon: `tuiIconCard`,
  }

  readonly market = {
    text: `Market Ürünleri`,
    icon: `tuiIconCard`,
  }
  readonly kitap = {
    text: `Kitap`,
    icon: `tuiIconCard`,
  }
  readonly film = {
    text: `Film`,
    icon: `tuiIconCard`,
  }
  readonly kirtasiye = {
    text: `Kırtasiye`,
    icon: `tuiIconCard`,
  }
  readonly giyim = {
    text: `Giyim`,
    icon: `tuiIconCard`,
  }
  readonly oyuncak = {
    text: `Oyuncak`,
    icon: `tuiIconCard`,
  }

  filterCategory:string
  onClickGetText(value:string){
    this.filterCategory = value
  }
  
  showNotification(): void {
    this.alerts.open(`Keyifli Alışverişler Dileriz`, {label: `Ürün Sepetinize Eklendi`}).subscribe();
  }
  addCart(name:string,desc:string,price:string,path:string){
    this.sendProduct.product_name = name
    this.sendProduct.product_desc = desc
    this.sendProduct.product_price = price
    this.sendProduct.product_path = path

    this.sendAllData.push(this.sendProduct)
    this.sendProduct= {}
    this.showNotification()
    this.whichUserLogin.getAllData(this.sendAllData)

  }
}
