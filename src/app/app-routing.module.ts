import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './module/cart/cart.component';
import { LayoutComponent } from './module/layout/layout.component';
import { LoginComponent } from './module/login/login.component';
import { LogoutComponent } from './module/logout/logout.component';
import { ProductComponent } from './module/product/product.component';
import { ProductdetailsComponent } from './module/productdetails/productdetails.component';
import { SignupComponent } from './module/signup/signup.component';

const routes: Routes = [
  {
    path: 'layout', component: LayoutComponent
  },
  {
    path: '', redirectTo:'/layout', pathMatch: 'full'
  },
  {
    path: 'layout/signup', component: SignupComponent
  },
  {
    path: 'layout/login', component: LoginComponent
  }, 
  {
    path: 'layout/product', component: ProductComponent
  },
  {
    path: 'layout/logout', component: LogoutComponent
  },  
  {
    path: 'layout/cart', component: CartComponent
  },  
  {
    path: 'productdetails', component: ProductdetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
