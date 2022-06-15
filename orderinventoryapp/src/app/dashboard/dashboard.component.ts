import { Component, OnInit } from '@angular/core';
import { DbservicesService } from '../dbservices.service';
import { Router } from '@angular/router'; 
import { DatabaseServicesService } from '../database-services.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  object: any = [];
  alldata: any;

  constructor(private api: DbservicesService, private router:Router,private apis:DatabaseServicesService,private toastr:ToastrService) {
    // to Do constructor
  }
  ngOnInit(): void { /* TO DO document why this method 'ngOnInit' is empty */ 

 
    this.api.getUser().subscribe((data) => {
      console.log(data);
      this.alldata = data;
      this.alldata = this.alldata.docs;
      console.log(this.alldata);
      for (const i of this.alldata) {
        console.log(i);
        this.object.push(i);
      }
    });
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['/login'])
  }
}