import { Component, OnInit } from '@angular/core';
// import { DatabaseServicesService } from '../database-services.service';
import { DbservicesService } from '../dbservices.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  object: any = [];
  alldata: any;

  constructor(private api: DbservicesService) {
      this.getuser();
  }
  ngOnInit(): void {}

  getuser() {
    this.api.getUser().subscribe((data) => {
      console.log(data);
      // alert('Data was fetching....');
      this.alldata = data;
      this.alldata = this.alldata.docs;
      console.log(this.alldata);
      for (const i of this.alldata) {
        console.log(i);
        this.object.push(i);
      }
    });
  }

  deluser(data: any, data1: any) {
    this.api.remove(data._id, data1._rev).subscribe((res) => {
      alert('Your Data has been deleted from the database.');
      location.reload();
    });
  }
}