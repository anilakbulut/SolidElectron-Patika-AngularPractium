import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { TuiInputCountModule, TuiTabsModule } from '@taiga-ui/kit';
import { TuiSvgModule } from '@taiga-ui/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    TuiTabsModule,
    TuiSvgModule,
    TuiInputCountModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports:[
    NavbarComponent
  ]
})
export class NavbarModule { }
