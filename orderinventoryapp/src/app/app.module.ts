import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { CartComponent } from './cart/cart.component';
import { ContactComponent } from './contact/contact.component';
import { HomepageComponent } from './homepage/homepage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { HttpCallInterceptor } from './interceptor';
import { OrderplacedComponent } from './orderplaced/orderplaced.component';
import { MycartsComponent } from './mycarts/mycarts.component';
import { AdditionalInfoComponent } from './additional-info/additional-info.component';
import { PurchasedItemsComponent } from './purchased-items/purchased-items.component';
import { OrderinfoComponent } from './orderinfo/orderinfo.component';
@NgModule({
  declarations: [
    AppComponent,
     RegistrationFormComponent,
     AdminLoginComponent,
    HomeComponent,
     DashboardComponent,
    ProductsComponent,
    CartComponent,
    ContactComponent,
    HomepageComponent,
    OrderplacedComponent,
    MycartsComponent,
    AdditionalInfoComponent,
   
    PurchasedItemsComponent,
    OrderinfoComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:HttpCallInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
