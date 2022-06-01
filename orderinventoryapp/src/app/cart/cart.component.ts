import { Component, OnInit } from '@angular/core';
import { DatabaseServicesService } from '../database-services.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
alluser:any;
selected = false;
userproducts:any =[];
pro_name:any=[];
pro_price:any=[];
quantity:any=[];
total_Qty:any=[];
store:any;
product:any=[];
type:string="orderitems";

// inc(pro:any ){
//   // console.log(pro.quantity);
//   if(pro.quantity != 10){
//     pro.quantity += 1;
//   }
// }
// dec(pro:any){
//   // console.log(pro.quantity);
//   if(pro.quantity == 1){
//     pro.quantity =1;
//   }
//   else if(pro.quantity !=1){
//     pro.quantity=pro.quantity-1;

//   }
// }
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
// itemsCart:any = [];
// addCart(category:any){
//   console.log(category);
//   let cartDataNull = localStorage.getItem('localCart');
//   if(cartDataNull == null){
//     let storeDataGet:any =[];
//     storeDataGet.push(category);
//     localStorage.setItem('localCart',JSON.stringify(storeDataGet));
// }
//   else{
//     var id = category.proId;
//     let index:number = -1;
//    var hello:any=localStorage.getItem('localCart');
//      this.itemsCart =JSON.parse(hello);
//     for(let i=0; i<this.itemsCart.length; i++){
//       if(parseInt(id) === parseInt(this.itemsCart[i].proId)){
//         this.itemsCart[i].qnt = category.qnt;
//         index =i;
//         break;
//       }
//       if(index == -1){

//         this.itemsCart.push(category);
//         localStorage.setItem('localCart', JSON.stringify(this.itemsCart) );
//       }
//       else{
//         localStorage.setItem('localCart', JSON.stringify(this.itemsCart) );
//       }
//     }
//   }
// }
addCart(obj:any){
    
      this.userproducts.push(obj);
    // console.log(this.userproducts)
}
cart(){
  for(var i=1;i<this.userproducts.length;i++)
  {
this.store=this.userproducts;
console.log("store=",this.store);
// console.log("store object",this.store.obj)
  }
}


  constructor(private api:DatabaseServicesService) { }

  ngOnInit(): void {
  }
  // productArray= [
  //   {
  //     proId:1,
  //     img:"./../assets/mulgoba.jpg",
  //     amt:150,
  //     qnt:1
  //   },
  //   {
  //     proId:2,
  //     img:"../../assets/banganapalli.jpg",
  //     amt:200,
  //     qnt:1
  //   },
  //   { proId:3,
  //     img:"../../assets/badami.jpg",
  //     amt:300,
  //     qnt:1
  //   }
  // ];
  // fetch(){
  //   this.api.getbytype("productupdate","rohini-trainee").subscribe(res=>{
  //     console.log(res);
  //     this.alluser=res;
  //     this.alluser=this.alluser.docs;
  //       console.log(this.alluser);
  //       for(const i of this.alluser){
  //             console.log(i);
  //             this.product.push(i);
  //             console.log(this.product.pro_name);
  //             console.log(this.product.pro_price);
  //             console.log(this.product.quantity);
  //             console.log(this.product.total_Qty);             
  //           }
  //     alert("the data is Retrived");
  //   },rej=>{
  //     alert("data was not retrived!!")
  //   });
  // }
 

  
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
      alert("the data is Retrived");
    },rej=>{
      alert("data was not retrived!!")
    });
  }
  order(){
    for(let i of this.store ){
      var obj= {
        pro_name: i.pro_name,
        pro_price: i.pro_price,
        quantity: i.quantity,
         total:i.pro_price*i.quantity,
        user_id:localStorage.getItem('userid'),
        type: "stockupdate"
      }
    this.api.add("rohini-trainee",obj).subscribe(res=>{
     console.log(res);
     alert("data was posted");
    },rej=>{
     alert("data is not posted!!");
    });
}
  }
}


  