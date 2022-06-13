import {  Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { DatabaseServicesService } from '../database-services.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
    addform!:FormGroup
    object2:any;
    products:any={
      pro_img:"",
       pro_name:"",
       pro_price:"",
       quantity:"",
       total_Qty:"",

    }
    obj:any;
  userproducts: any=[];
  store: any;

  constructor(private fb: FormBuilder,private api:DatabaseServicesService,private toastr: ToastrService ) {
    this.addform = this.fb.group({
      pro_img: [this.products.pro_img,Validators.required],

      pro_name: [this.products.pro_name,Validators.required],
     pro_price: [this.products.pro_price,Validators.required],
      quantity:[this.products.quantity,Validators.required],
      total_Qty:[this.products.total_Qty,[Validators.required] ]});
   }
   ngOnInit(): void {
    this.addform = this.fb.group({
      pro_img: ['',[Validators.required]],

      pro_name: ['',[Validators.required]],
      pro_price: ['',[Validators.required ]],
      quantity: ['',[Validators.required]],
      total_Qty: ['',[Validators.required]],
      type:'productupdate'
     
    });
  }
  get pro_img() {
    return this.addform.get('pro_img');
  }
  get pro_name() {
    return this.addform.get('pro_name');
  }

  get pro_price() {
    return this.addform.get('pro_pricer');
  }


  get  quantity (){
    return this.addform.get(' quantity');
  }
  get  total_Qty (){
    return this.addform.get(' total_Qty');
  }
  // submit(FormValue: NgForm){
  //   this.api.logindata(FormValue).subscribe(
  //     (data: any) => {
  //       console.log(alert('Data posted'));
  //       this.addform.reset();
  //     },
  //     (rej: string) => {
  //       console.log('Error' + rej);
  //     }
  //   );
  //   console.log(FormValue);
  // }
//   addCart(obj:any){
    
//     this.userproducts.push(obj);
//   // console.log(this.userproducts)
// }
// cart(){
// for(var i=1;i<this.userproducts.length;i++)
// {
// this.store=this.userproducts;
// console.log("store=",this.store);
// // console.log("store object",this.store.obj)
// }
// }
  submit(){
 

      this.api.add1("rohini-trainee",this.addform.value).subscribe(res=>{
      console.log(res);
      this.toastr.success("product Added successfully")
     },rej=>{
       this.toastr.error("product failed to add")
     });
    //  this.api.get("rohini-trainee").subscribe(res=>{
    //   console.log(res);
    //   alert("the data is Retrived");
    //   window.location.reload();
    //  },rej=>{
    //   alert("data was not retrived!!")
    //  });
    
    
    
    }
//      add(){
//       //  console.log(this.addform.value);
//        console.log(this.addform.value);
//        this.object2=[
//         {pro_img:this.pro_img},
         
//         {pro_name:this.pro_name},
//         {pro_price:this.pro_price},
//         {quantity:this.quantity},
//         {total_Qty:this.total_Qty},
//        ]

// //  this.addCart(this.object2)
    
    
// }


dontallow(event:any){
 
  if(event.code=='Minus'|| event.key=='-'||event.keycode=='189'){
  console.log(event);
  event.preventdefault();
  }
}

}