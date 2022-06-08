import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
// import { HomeComponent } from './home/home.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
 import { VendorLoginComponent } from './vendor-login/vendor-login.component';
 import { DashboardComponent } from './dashboard/dashboard.component';
// import { ProductsComponent } from './products/products.component';
import { ProductsComponent } from './products/products.component';
//import { OrderComponent } from './order/order.component';
import { CartComponent } from './cart/cart.component';
import { ContactComponent } from './contact/contact.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PurchasedListComponent } from './purchased-list/purchased-list.component';
import { MycartsComponent } from './mycarts/mycarts.component';
import { OrderplacedComponent } from './orderplaced/orderplaced.component';
import { AdditionalInfoComponent } from './additional-info/additional-info.component';
import { UdashboaedComponent } from './udashboaed/udashboaed.component';
const routes: Routes = [ 
{path:'vendor',component:VendorLoginComponent},
{path:'admin',component:AdminLoginComponent},
{path: 'dashboard', component:DashboardComponent},
 {path:'products',component:ProductsComponent},
{path:'add', component:ProductsComponent},
{path:'signup',component:RegistrationFormComponent},
// {path:'order',component:OrderComponent},
{path:'cart',component:CartComponent},
{path: 'contact', component: ContactComponent},
// {path: 'home', component: HomeComponent},
{path:'homepage',component:HomepageComponent},
{path:'',component:HomepageComponent},
{path:'list',component:PurchasedListComponent},
{path:'mycart',component:MycartsComponent},
{path:'orderplaced',component:OrderplacedComponent},
{path:'vinfo',component:AdditionalInfoComponent},
{path:'udashboard',component:UdashboaedComponent}

// {path:'contact',component:ContactusComponent},
// {path:'about',component:AboutusComponent},
//  {path:'admindashboard',component:AdmindashbroadComponent}
// ];


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
