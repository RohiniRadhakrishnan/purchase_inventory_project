import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
 import { VendorLoginComponent } from './vendor-login/vendor-login.component';
 import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { ContactComponent } from './contact/contact.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MycartsComponent } from './mycarts/mycarts.component';
import { OrderplacedComponent } from './orderplaced/orderplaced.component';
import { AdditionalInfoComponent } from './additional-info/additional-info.component';
import { PurchasedItemsComponent } from './purchased-items/purchased-items.component';
import { OrderinfoComponent } from './orderinfo/orderinfo.component';
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
{path:'mycart',component:MycartsComponent},
{path:'orderplaced',component:OrderplacedComponent},
{path:'vinfo',component:AdditionalInfoComponent},

{path:'plist',component:PurchasedItemsComponent},
{path:'orderinfo',component:OrderinfoComponent}


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
