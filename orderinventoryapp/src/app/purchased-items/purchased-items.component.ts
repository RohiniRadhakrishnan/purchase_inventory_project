import { Component, OnInit } from '@angular/core';
import { DatabaseServicesService } from '../database-services.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-purchased-items',
  templateUrl: './purchased-items.component.html',
  styleUrls: ['./purchased-items.component.css']
})
export class PurchasedItemsComponent implements OnInit {
alluser:any;
temp:any;
mydata:any;
id:any;
userInf:any;
  constructor(private api:DatabaseServicesService, private toastr:ToastrService,private router:Router) { }

  ngOnInit(): void {
    const query = {
      user_id: this.id,
      type: 'order',
     };
     this.api.userDetail(query, 'rohini-trainee').subscribe((datas) => {
      console.log('user info', datas);
      this.mydata = datas;
      this.mydata = this.mydata.docs;
      for (const iterator of this.mydata) {
       this.userInf.push(iterator);
      }
      console.log(this.userInf)
     });
    

      this.api.getbytype("order","rohini-trainee").subscribe(res=>{
        console.log(res);
        this.alluser=res;
        this.alluser=this.alluser.docs;
          console.log(this.alluser);
       this.temp=this.alluser.map((x: { user: any; }) =>  x.user)
        
      this.api.getAllOrderByIdsPost(this.temp).subscribe( (result:any)=>{
      const userData = result.rows.map((el:any)=> el.doc);
      console.log('alluser',this.alluser)
      this.alluser.forEach((element:any) => {
        element['userData'] = userData.filter((lkp:any)=> element['user'] === lkp['_id'] )[0]
      });
      })
              this.toastr.success('add your product in a cart')
      },_rej=>{
        console.log("Product not added in cart");
      });
  
      
  }
  orderview(usrId:any){ 
    this.router.navigate(['/orderinfo'],
    {queryParams:{
      userId:JSON.stringify(usrId)
    }})
  }
}
