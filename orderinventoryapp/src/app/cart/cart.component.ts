import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseServicesService } from '../database-services.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
alluser:any;
selected = false;
userproducts:any =[];
pro_img:any=[];
pro_name:any=[];
pro_price:any=[];
quantity:any=[];
total_Qty:any=[];
store:any;
product:any=[];
count:any=0;
type:string="orderitems";

inc(pro:any){

  if(pro.quantity != 10){
        pro.quantity+= 1;
      }
    }

dec(pro:any){

  if(pro.quantity != 1){
    pro.quantity -= 1;
  }
}
addCart(obj:any){

    
      this.api.userproducts.push(obj);
      console.log( "obj1",obj);
      localStorage.setItem('localCart', JSON.stringify(obj));

      console.log(this.count,'count');

      
      this.toastr.success('add your product in a cart')

}
cart(){

this.store=this.userproducts;

}


  constructor(public api:DatabaseServicesService,private router:Router,private toastr:ToastrService) { 
    this.fetchproduct();
  }

  ngOnInit(): void {
    // TO DO document why this method 'ngOnInit' is empty
  
  
  }
  
  fetchproduct(){
    this.api.getbytype("productupdate","rohini-trainee").subscribe(res=>{
      console.log(res);
      this.alluser=res;
      this.alluser=this.alluser.docs;
        console.log(this.alluser);
        for(const i of this.alluser){
              console.log(i);
              this.product.push(i);
              console.log(i.pro_name,i.pro_price,i.quantity,i.total_Qty);

            }
            this.toastr.success('add your product in a cart')
    },_rej=>{
      console.log("Product not added in cart");
    });
  }

  NavigateToCart(){
    console.log("products",this.api.userproducts);
    const data={
      products :JSON.stringify(this.api.userproducts),
      "key":"value" 
    }
this.router.navigate(['/mycart'],{
  queryParams:data
})
  }
}


  