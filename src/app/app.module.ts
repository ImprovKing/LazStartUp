import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GooglePayButtonModule } from "@google-pay/button-angular"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { FooterComponent } from './_COMPONENTS/footer/footer.component';
import { HttpClientModule, HTTP_INTERCEPTORS  } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthInterceptor } from './_AUTH/auth/auth.interceptor';
import { CartService } from './_API/cart/cart.service';
import { NewArrivalComponent } from './new-arrival/new-arrival.component';
import { ProductBarComponent } from './_COMPONENTS/product-bar/product-bar.component';
import { from } from 'rxjs';
import { NavbarComponent } from './_COMPONENTS/navbar/navbar.component';
import { ShirtsComponent } from './shirts/shirts.component';
import { PantsComponent } from './pants/pants.component';
import { OthersComponent } from './others/others.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductdetailComponent,
    NavbarComponent,
    FooterComponent,
    NewArrivalComponent,
    ProductBarComponent,
    ShirtsComponent,
    PantsComponent,
    OthersComponent
  ],
  imports: [
    BrowserModule,    
    HttpClientModule ,
    AppRoutingModule,
    IvyCarouselModule ,   
    BrowserAnimationsModule,
    GooglePayButtonModule , 
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    JwtModule.forRoot({
      config: {
        tokenGetter:  () => localStorage.getItem('access_token')
      }
    })
  ],
  providers: [
    {
      provide : HTTP_INTERCEPTORS ,
      useClass : AuthInterceptor ,
      multi : true
    }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
