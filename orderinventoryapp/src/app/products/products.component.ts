import {  Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { DatabaseServicesService } from '../database-services.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
    addform!:FormGroup
    object2:any;
    products:any={
       pro_name:"",
       pro_price:"",
       quantity:"",
       total_Qty:"",

    }

  constructor(private fb: FormBuilder,private api:DatabaseServicesService ) {
    this.addform = this.fb.group({
      pro_name: [this.products.pro_name,Validators.required],
     pro_price: [this.products.pro_price,Validators.required],
      quantity:[this.products.quantity,Validators.required],
      total_Qty:[this.products.total_Qty,[Validators.required] ]});
   }
   ngOnInit(): void {
    this.addform = this.fb.group({
      pro_name: ['',[Validators.required]],
     pro_price: ['',[Validators.required ]],
      quantity: ['',[Validators.required]],
      total_Qty: ['',[Validators.required]],
      type:'productupdate'
     
    })
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
  submit(){
     this.api.add("rohini-trainee",this.addform.value).subscribe(res=>{
      console.log(res);
      alert("data was posted");
     },rej=>{
      alert("data is not posted!!");
     });
     this.api.get("rohini-trainee").subscribe(res=>{
      console.log(res);
      alert("the data is Retrived");
      window.location.reload();
     },rej=>{
      alert("data was not retrived!!")
     });
    
     }
     add(){
       console.log(this.addform.value);
       console.log(this.addform.value);
       this.object2=[
        {pro_name:this.pro_name},
        {pro_price:this.pro_price},
        {quantity:this.quantity},
        {total_Qty:this.total_Qty}
       ]
     }
    
    
}




