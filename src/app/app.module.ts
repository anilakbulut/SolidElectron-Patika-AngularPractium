import { NgDompurifySanitizer } from "@tinkoff/ng-dompurify";
import { TuiRootModule, TuiDialogModule, TuiAlertModule, TUI_SANITIZER } from "@taiga-ui/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LayoutModule } from "./module/layout/layout.module";
import { RouterModule } from "@angular/router";
import { SignupModule } from "./module/signup/signup.module";
import { ProductModule } from "./module/product/product.module";
import { AuthService } from "./services/auth.service";
import { LogoutModule } from "./module/logout/logout.module";
import { CartModule } from "./module/cart/cart.module";
import { ProductdetailsModule } from "./module/productdetails/productdetails.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    SignupModule,
    HttpClientModule,
    BrowserAnimationsModule,
    TuiRootModule,
    TuiDialogModule,
    TuiAlertModule,
    ProductModule,
    LogoutModule,
    CartModule,
    ProductdetailsModule,
    RouterModule
  ],
  providers: [
    { provide: TUI_SANITIZER, useClass: NgDompurifySanitizer },
      AuthService    
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
