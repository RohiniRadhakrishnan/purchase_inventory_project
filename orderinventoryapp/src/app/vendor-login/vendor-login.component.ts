import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DbservicesService } from '../dbservices.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-vendor-login',
  templateUrl: './vendor-login.component.html',
  styleUrls: ['./vendor-login.component.css']
})
export class VendorLoginComponent implements OnInit {
  alldata: any;
  flag = 0;
  object: any = [];
  userform!: FormGroup;
  constructor(
    private formbuilder: FormBuilder,
    private api: DbservicesService,
    private router: Router,
    private toastr:ToastrService
  ) {}

  ngOnInit(): void {
    this.userform = this.formbuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });

    this.api.getUser().subscribe((data) => {
      console.log(data);
      console.log('Data was fetching');
      this.alldata = data;
      this.alldata = this.alldata.docs;
      JSON.stringify(data)
      console.log(this.alldata);
      for (const i of this.alldata) {
       
        this.object.push(i);
        localStorage.setItem("user",i._id);
        console.log('Fetched successfuly');
    
      }
    });
  }

  userFormData(formvalue: any) {
    this.api.getUsers(formvalue).subscribe(e=>{console.log(e)})
    console.log(formvalue);
    for (const i of this.object) {
      if (
        i.username == formvalue.username &&
        i.password == formvalue.password
      ) {
        localStorage.setItem("userid",i._id);
        this.flag = 1;
      }
    }
    if (this.flag == 1) {
      this.router.navigate(['/vinfo']);
      this.toastr.success("welcome to Rainbow fruitfair");
      
    } else {
      this.toastr.error("invalid access");

    }
  }
}