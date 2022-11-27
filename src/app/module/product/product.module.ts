import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiTabsModule } from '@taiga-ui/kit';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TuiAlertModule, TuiSvgModule } from '@taiga-ui/core';
import { RouterModule } from '@angular/router';
import { ProductComponent } from './product.component';
import { CategoryPipe } from 'src/app/pipe/category.pipe';
import { TextPipe } from 'src/app/pipe/text.pipe';



@NgModule({
  declarations: [ProductComponent,
    CategoryPipe,TextPipe],
  imports: [
    CommonModule,
    TuiTabsModule,    
    FormsModule,
    ReactiveFormsModule,
    TuiSvgModule,
    RouterModule,
    TuiAlertModule,
  ],
  exports:[
    ProductComponent
  ]
})
export class ProductModule { }
