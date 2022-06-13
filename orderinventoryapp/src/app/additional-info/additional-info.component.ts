import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators,NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DatabaseServicesService } from '../database-services.service';
import { DbservicesService } from '../dbservices.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-additional-info',
  templateUrl: './additional-info.component.html',
  styleUrls: ['./additional-info.component.css']
})
export class AdditionalInfoComponent implements OnInit {
  addinfo!:FormGroup;
  alluser:any;
  flag=0;
  object:any=[];
  product:any=[];
  info :any={
    shopname:"",
    vtype:"",

  }
  vinfos: any;
  value: any;
  mydata: any;
  userInf: any;
  id: any;

  constructor(private fb:FormBuilder,private api :DatabaseServicesService, private apis:DbservicesService, private router:Router,private toastr:ToastrService) {
  this.id = localStorage.getItem("userid");

    this.addinfo = this.fb.group({
      shopname: [this.info.shopname,Validators.required],
     vtype: [this.info.vtype,[Validators.required] ]
    });
   }

  ngOnInit(): void {
    this.addinfo = this.fb.group({
      shopname: [this.info.shopname,Validators.required],
     vtype: [this.info.vtype,[Validators.required] ],
     type:'vinfo',
});
const query = {
     user_id: this.id,
     type: 'vinfo',
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
   
  
  
}
submit(){
  this.api.add2("rohini-trainee",this.addinfo.value).subscribe(res=>{
    console.log(res);
    this.toastr.success("adddtional info completed sucessfully")
   },rej=>{
   });
  }


deluser(data: any, data1: any) {
  this.apis.remove(data._id, data1._rev).subscribe((res) => {
    alert('Your Data has been deleted from the database.');
    location.reload();
  });
}
}

