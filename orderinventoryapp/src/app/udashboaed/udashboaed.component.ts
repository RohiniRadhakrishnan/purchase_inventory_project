import { Component, OnInit } from '@angular/core';
import { DatabaseServicesService } from '../database-services.service';
import { DbservicesService } from '../dbservices.service';
@Component({
  selector: 'app-udashboaed',
  templateUrl: './udashboaed.component.html',
  styleUrls: ['./udashboaed.component.css']
})

export class UdashboaedComponent implements OnInit {
info: any ;

  constructor(private api:DatabaseServicesService,private apis:DbservicesService) {
  }

  ngOnInit(): void {
    this.api.viewdocument("vinfo").subscribe((res:any) =>{
             console.log(res);
              //let datas= res['rows'];
              // console.log(datas)
              this.info= res.rows.map((x:any)=>x.doc)
  });
}
  deluser(data: any, data1: any) {
    this.apis.remove(data._id, data1._rev).subscribe((res) => {
      alert('Your Data has been deleted from the database.');
      location.reload();
    });
  }

}
