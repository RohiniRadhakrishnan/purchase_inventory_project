import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { DatabaseServicesService } from '../database-services.service';
import * as lodash from'lodash'
@Component({
  selector: 'app-orderinfo',
  templateUrl: './orderinfo.component.html',
  styleUrls: ['./orderinfo.component.css']
})
export class OrderinfoComponent implements OnInit {
  alluser:any;
orderData:any
product:any;
  constructor(private activatedRouter:ActivatedRoute,private api:DatabaseServicesService) {
    this.activatedRouter.queryParams.subscribe((res:any)=>{
      console.log(JSON.parse(res.userId))
      this.orderData=JSON.parse(res.userId)
    })
   }

  ngOnInit(): void {
    const selector = {
      "type":"orderInformation",
      "order":this.orderData._id
    }
    this.api.FindApiCall(selector).subscribe(res=>{
      console.log(res);
      this.alluser=res;
      this.alluser=this.alluser.docs;
        console.log(this.alluser);
        this.product=this.alluser.map((x: any) =>x.product)
      const productKeys = '"'+ this.product.join('","') +'"'
      this.api.getAllOrderByIds(productKeys).subscribe((lookup:any)=>{
        console.log(lookup)
        lookup = lookup.rows.map((x:any)=>x.doc)
        let temp:any=[]
        this.alluser.forEach((element:any) => {
          element['product'] = lodash.find(lookup,{'_id':element['product']})
          temp.push(element)
      })
      this.alluser = temp
      
  });

})
  }}
