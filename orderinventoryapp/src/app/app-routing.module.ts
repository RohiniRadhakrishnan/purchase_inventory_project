import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { HomeComponent } from './home/home.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
 import { VendorLoginComponent } from './vendor-login/vendor-login.component';
 import { DashboardComponent } from './dashboard/dashboard.component';
// import { ProductsComponent } from './products/products.component';
import { ProductsComponent } from './products/products.component';
import { HomePageComponent } from './home-page/home-page.component';
//import { OrderComponent } from './order/order.component';
import { CartComponent } from './cart/cart.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
const routes: Routes = [ 
{path:'admin',component:AdminLoginComponent},
{path:'vendor',component:VendorLoginComponent},
{path: 'dashboard', component:DashboardComponent},
 {path:'products',component:ProductsComponent},
{path:'add', component:ProductsComponent},
{path:'signup',component:RegistrationFormComponent},
{path:'homepage',component:HomePageComponent},
// {path:'order',component:OrderComponent},
{path:'cart',component:CartComponent},
{path: 'contact', component: ContactComponent},
{path: 'header', component:HeaderComponent}

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
