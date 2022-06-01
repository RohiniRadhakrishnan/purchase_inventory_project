import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { VendorLoginComponent } from './vendor-login/vendor-login.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
// import { OrderComponent } from './order/order.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CartComponent } from './cart/cart.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
// import { CartComponent } from './cart/cart.component';
@NgModule({
  declarations: [
    AppComponent,
    VendorLoginComponent,
     RegistrationFormComponent,
     AdminLoginComponent,
    HomeComponent,
    // ProductListComponent,
     DashboardComponent,
    ProductsComponent,
    // OrderComponent,
    HomePageComponent,
    CartComponent,
    ContactComponent,
    HeaderComponent,
    // CartComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
