import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DbservicesService } from '../dbservices.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {
  registerform!: FormGroup;
   value: boolean = true;
   resObj:any;
  
   constructor(
    private formbuilder: FormBuilder,
    private api: DbservicesService,
    private router:Router ,
    private toastr:ToastrService  ) {
    
   }
  
   ngOnInit(): void {
    this.registerform = this.formbuilder.group({
     username: ['', Validators.required],
   
    phone: ['',[Validators.required, Validators.min(1000000000),Validators.max(9999999999)]],

    email: ['',[Validators.required,Validators.pattern("[a-zA-Z0-9]*@gmail.com")]],


     address: ['', Validators.required],

     password: [
      '',
      [Validators.required, Validators.pattern('[A-Za-z0-9@!_]{5,}')],
    ],
    type:["user"],

    });
   }
   register(Formvalue:any ) {
    Formvalue['role'] = 'vendor';
    console.log("formvalue",Formvalue);
    this.api.signupdata(Formvalue).subscribe((data:any) => {
     console.log(data);
   
      this.toastr.success(data.message);
     this.router.navigate(['/login']);
    },err =>{
      console.error(err)


      this.toastr.error(err.error.error.message);
    

    })

    
   }
  }
  
  