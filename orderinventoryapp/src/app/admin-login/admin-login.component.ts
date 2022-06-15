 import { Component, OnInit } from '@angular/core';
 import { FormGroup,FormBuilder, Validators } from '@angular/forms';
 import { Router } from '@angular/router';
 import { DbservicesService } from '../dbservices.service';
 import { ToastrService } from 'ngx-toastr';
 import * as lodash from'lodash'

 @Component({
   selector: 'app-admin-login',
   templateUrl: './admin-login.component.html',
   styleUrls: ['./admin-login.component.css']
 })
 export class AdminLoginComponent implements OnInit {
  object: any = [];
   alldata: any;
   flag = 0;
   adminform!: FormGroup;
  
   constructor(
    private formbuilder: FormBuilder,
    private api: DbservicesService,
    private router: Router,
    private toastr:ToastrService
   ) {}
  
   ngOnInit(): void {
    this.adminform = this.formbuilder.group({
     username: ['', Validators.required],
     password: ['', Validators.required],
    });
    this.api.getadmin().subscribe((data) => {
     console.log(data);
     console.log('Data was fetching....');
     this.alldata = data;
     this.alldata = this.alldata.docs;
     console.log(this.alldata);
     for (const i of this.alldata) {
      console.log(i);
      this.object.push(i);
     }
    });
   }
  
   adminFormsData(formvalue: any) {
    let loggedUserData=lodash.find(this.alldata,{"username":formvalue.username,"password":formvalue.password})
    console.log(loggedUserData)
    if(loggedUserData && loggedUserData.role==="admin"){
      localStorage.setItem("adminid",loggedUserData._id);
      this.toastr.success("Welcome Adminss");
         this.router.navigate(['/dashboard']);
    }else if(loggedUserData && loggedUserData.role==="vendor"){
      localStorage.setItem("userid",loggedUserData._id);
         this.toastr.success("Welcome vendor");
          this.router.navigate(['/vinfo']);
    }else{
      this.toastr.error("Access invalid");
    }
    
   }
  }
  
  