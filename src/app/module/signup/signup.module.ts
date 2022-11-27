import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup.component';
import { TuiInputModule, TuiInputPasswordModule } from '@taiga-ui/kit';
import { ReactiveFormsModule } from '@angular/forms';
import { TuiAlertModule, TuiDialogModule } from '@taiga-ui/core';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SignupComponent
  ],
  imports: [
    CommonModule,
    TuiInputModule,
    ReactiveFormsModule,
    TuiDialogModule,
    TuiInputPasswordModule,
    TuiAlertModule,
    RouterModule
  ],
  exports:[
    SignupComponent
  ]
})
export class SignupModule { }
