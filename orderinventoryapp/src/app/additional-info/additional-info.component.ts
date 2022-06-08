import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators,NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DatabaseServicesService } from '../database-services.service';
@Component({
  selector: 'app-additional-info',
  templateUrl: './additional-info.component.html',
  styleUrls: ['./additional-info.component.css']
})
export class AdditionalInfoComponent implements OnInit {
  addinfo!:FormGroup
  info :any={
    shopname:"",
    vtype:"",

  }

  constructor(private fb:FormBuilder,private api :DatabaseServicesService, private router:Router) {
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

}
get shopname() {
  return this.addinfo.get('shopname');
}
get vtype() {
  return this.addinfo.get('vtype');
}
submit(){
 

  this.api.add2("rohini-trainee",this.addinfo.value).subscribe(res=>{
  console.log(res);
  alert("data was posted");
  this.router.navigate(['/udashboard']);

 },rej=>{
  alert("data is not posted!!");
 });




}
}
