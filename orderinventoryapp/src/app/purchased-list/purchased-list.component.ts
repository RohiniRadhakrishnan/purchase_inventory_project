import { Component, OnInit } from '@angular/core';
import { DatabaseServicesService } from '../database-services.service';
import * as lodash from 'lodash';
// import { pipe } from 'rxjs';
// import { filter } from 'lodash';


@Component({
  selector: 'app-purchased-list',
  templateUrl: './purchased-list.component.html',
  styleUrls: ['./purchased-list.component.css']
})
export class PurchasedListComponent implements OnInit {
product:any=[];
productTemp:any;
// pro_name:any=[];
// pro_img:any[];
// pro_price:any=[];
// quantity:any=[];
// stock:any[];
// total:any=[];
alluser:any;
  getProduct: any;


 
// type:string="management";
  constructor(private api:DatabaseServicesService) {
    // this.view();
   }
//   view(){
    
//     this.api.viewdocument("order").subscribe(res =>{
//       console.log(res);
//       // let datas= res['rows'];
//       // console.log(datas)
//       // this.alluser =  datas.map(item => item.doc)

// });
// view(){

// }



  ngOnInit(): void {
    this.api
   .getbytype('orderInformation', 'rohini-trainee')
   .subscribe((datas: any) => {
    console.log('product', datas);
    this.productTemp = datas.docs;

    this.getProduct = [];
    let product = [];
    this.getProduct = lodash.uniqBy(this.productTemp, 'product');
    product = lodash.map(this.getProduct, 'product');
    this.getProduct.forEach((element:any) => {
     const prod = this.productTemp.filter(
      (el:any) => el['pro_name'] === element['pro_name']
     );
     element['quantity'] = lodash.sumBy(prod, 'quantity');
    });

    let data = {
     keys: product,
    };
    this.api
     .getAllDocsByKeys('rohini-trainee', data)
     .subscribe((productData: any) => {
      const getProd = productData.rows.map((el:any) => el.doc);
      this.getProduct.forEach((prod:any) => {
       prod['productData'] = getProd.filter(
        (ell:any) => ell['_id'] === prod['pro_name']
       )[0];
      });
    //   this.stockcalu();
     console.log(productData);
     });
   });


  }
  // fetchlist(){
  //   this.api.getbytype("orderInformation","rohini-trainee").subscribe(res=>{
  //     console.log(res);
  //     this.alluser=res;
  //     this.product = this.alluser=this.alluser.docs;
      
  //     // alert("the data is Retrived");
  //   },rej=>{
  //     // alert("data was not retrived!!")
  //   });
  // }

}
