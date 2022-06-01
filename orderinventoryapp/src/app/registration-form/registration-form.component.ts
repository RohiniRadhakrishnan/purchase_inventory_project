import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { DbservicesService } from '../dbservices.service';
@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {
  registerform!: FormGroup;
   value: boolean = true;
  
   constructor(
    private formbuilder: FormBuilder,
    private api: DbservicesService
   ) {
    // this.api.getconnecting().subscribe(data =>{
    //  console.log(data)
    // } )
   }
  
   ngOnInit(): void {
    this.registerform = this.formbuilder.group({
     username: ['', Validators.required],
     phone: ['', Validators.required],
     email: ['', Validators.required],
     address: ['', Validators.required],
     password: ['', Validators.required],

    });
    // console.log(this.registerform);
   }
   register(Formvalue: NgForm) {
    console.log(Formvalue);
    alert('Your Data Posted....');
    this.api.signupdata(Formvalue).subscribe((data) => {
     console.log(data);
    });
   }
  }
  
  