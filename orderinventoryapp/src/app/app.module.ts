import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { VendorLoginComponent } from './vendor-login/vendor-login.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';

import { CartComponent } from './cart/cart.component';
import { ContactComponent } from './contact/contact.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PurchasedListComponent } from './purchased-list/purchased-list.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { HttpCallInterceptor } from './registration-form/interceptor';
import { OrderplacedComponent } from './orderplaced/orderplaced.component';
import { MycartsComponent } from './mycarts/mycarts.component';
import { AdditionalInfoComponent } from './additional-info/additional-info.component';
import { UdashboaedComponent } from './udashboaed/udashboaed.component';
// import { FilterPipe } from './filter.pipe';
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
    CartComponent,
    ContactComponent,
    HomepageComponent,
    PurchasedListComponent,
    OrderplacedComponent,
    MycartsComponent,
    AdditionalInfoComponent,
    UdashboaedComponent,
    // FilterPipe,
    // InterceptorComponent,
    // CartComponent,
    
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
