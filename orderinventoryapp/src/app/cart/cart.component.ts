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
type:string="orderitems";

inc(pro:any){
  // console.log(pro.qnt);
  // pro.qnt =pro.qnt+1;
  if(pro.quantity != 10){
        pro.quantity+= 1;
      }
    }

dec(pro:any){
  // console.log(pro.qnt);
  // pro.qnt =pro.qnt-1;
  if(pro.quantity != 1){
    pro.quantity -= 1;
  }
}
addCart(obj:any){
    
      this.userproducts.push(obj);
    // console.log(this.userproducts)
}
cart(){

this.store=this.userproducts;

}


  constructor(private api:DatabaseServicesService,private router:Router,private toastr:ToastrService) { 
    this.fetchproduct();
  }

  ngOnInit(): void {
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
              console.log(this.product.pro_name,this.product.pro_price,this.product.quantity,this.product.total_Qty);

            }
            this.toastr.success('add your product in a cart')
    },rej=>{
    });
  }

  NavigateToCart(){
    const data={
      products :JSON.stringify(this.store),
      "key":"value" 
    }
this.router.navigate(['/mycart'],{
  queryParams:data
})
  }
}


  