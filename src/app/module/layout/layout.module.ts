import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { NavbarModule } from '../navbar/navbar.module';
import { RouterModule } from '@angular/router';
import { IntroductionModule } from '../introduction/introduction.module';
import { LoginModule } from '../login/login.module';
import { ProductModule } from '../product/product.module';
import { LogoutModule } from '../logout/logout.module';
import { CartModule } from '../cart/cart.module';



@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    NavbarModule,
    IntroductionModule,
    LoginModule,
    ProductModule,
    LogoutModule,
    CartModule,
    RouterModule
  ],
  exports:[
    LayoutComponent
  ]
})
export class LayoutModule { }
