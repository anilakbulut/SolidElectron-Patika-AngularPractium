import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductdetailsComponent } from './productdetails.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ProductdetailsComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    ProductdetailsComponent
  ]
})
export class ProductdetailsModule { }
