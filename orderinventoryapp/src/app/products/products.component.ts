import {  Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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

  submit(){
 

      this.api.add1("rohini-trainee",this.addform.value).subscribe(res=>{
      console.log(res);
      this.toastr.success("product Added successfully")
     },_rej=>{
       this.toastr.error("product failed to add")
     });

    
    
    
    }



dontallow(event:any){
 
  if(event.code=='Minus'|| event.key=='-'||event.keycode=='189'){
  console.log(event);
  event.preventdefault();
  }
}

}