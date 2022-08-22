import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/sign-in/login/login.component';
import {FormsModule, ReactiveFormsModule }  from '@angular/forms';
import { RegisterComponent } from './pages/register/register.component'
import { JwtInterceptor } from './interceptors/jwt.interceptor';
import { ItemComponent } from './components/item/item.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './pages/sign-in/about/about.component';
import { GeneralDetailsComponent } from './pages/sign-in/general-details/general-details.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { StoreComponent } from './pages/store/store.component';
import { MyCartComponent } from './pages/store/my-cart/my-cart.component';
import { ProductsComponent } from './components/products/products.component';
import { AddToCartComponent } from './pages/store/add-to-cart/add-to-cart.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OrderComponent } from './pages/order/order.component';
import { CartComponent } from './pages/order/cart/cart.component';
import { ShippingFormComponent } from './pages/order/shipping-form/shipping-form.component';
import { OrderSuccessComponent } from './pages/order-success/order-success.component';
import { AdminComponent } from './pages/admin/admin.component';
import { AddProductComponent } from './pages/admin/add-product/add-product.component';
import { UpdateProductComponent } from './pages/admin/update-product/update-product.component';
import { ErrorComponent } from './pages/error/error.component';
import { MainComponent } from './pages/main/main.component';
import { DeleteProductComponent } from './pages/admin/delete-product/delete-product.component';
import { WelcomeComponent } from './pages/sign-in/welcome/welcome.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ItemComponent,
    HeaderComponent,
    SignInComponent,
    AboutComponent,
    GeneralDetailsComponent,
    SignInComponent,
    StoreComponent,
    MyCartComponent,
    ProductsComponent,
    AddToCartComponent,
    OrderComponent,
    CartComponent,
    ShippingFormComponent,
    OrderSuccessComponent,
    AdminComponent,
    AddProductComponent,
    UpdateProductComponent,
    ErrorComponent,
    MainComponent,
    DeleteProductComponent,
    WelcomeComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  providers: [{
    useClass: JwtInterceptor,
    provide: HTTP_INTERCEPTORS,
    multi: true
  }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
