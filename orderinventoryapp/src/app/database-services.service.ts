import { Injectable } from '@angular/core';
import{HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class DatabaseServicesService {
  fetchData(arg0: string) {
    throw new Error('Method not implemented.');
  }
  userid: any;
  userData: any;
  id: any;
  logindata(FormValue: NgForm) {
    throw new Error('Method not implemented.');
  }
  url = 'https://75b0afe3-3fa7-477b-8352-bdcfcd522a16-bluemix.cloudantnosqldb.appdomain.cloud/'
  dbUserName = 'apikey-v2-2djdlrrbf736ap4aa6rlre2x1j1wf65v1ti1e8x2bihn';
  dbPassword = '3bc2893c0a2a1ec42d9b17840b18447b';
  basicAuth = 'Basic ' + btoa(this.dbUserName + ':' + this.dbPassword);
  
  constructor(private http:HttpClient) { }
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.basicAuth
    })
  };

  add(db: string, doc: object): Observable<{}> {
    // const url2 = `${this.url}${db}`;
    const url=this.url+db;
    return this.http.post(url, doc, this.httpOptions)
  }
  
  get(db:string): Observable<{}>{
    const url = this.url+db+'/_all_docs?include_docs=true';
    return this.http.get(url,this.httpOptions)

  }
  getAllDocsByKeys(db: any, data: any) {
    const url = this.url + db + '/_all_docs?include_docs=true';
    const basicAuth = 'Basic ' + btoa(this.dbUserName + ':' + this.dbPassword);
    return this.http.post(url, data, { headers: { Authorization: basicAuth } });
  }
  getbytype(product: string, db:string) {
     let url = this.url +db+ '/_find'
     let typedData = {
      selector: {
       type: product,
      }
     };
     return this.http.post(url, typedData, this.httpOptions)
    
    }
    add1(db:string,formdata:any){
      const object={
        "pro_img": formdata['pro_img'],
        "pro_name":formdata['pro_name'],
        "pro_price":formdata['pro_price'],
        "quantity":formdata['quantity'],
        "total_Qty":formdata['total_Qty'],
        "admin_id":localStorage.getItem("adminid"),
        "type":"productupdate",
      
            };
            const url=this.url+db;
            return this.http.post(url, object, this.httpOptions)


    }
    add2(db:string,formdata:any){
      const object2={
        "shopname": formdata['shopname'],
        "vtype":formdata['vtype'],
       
        "user_id":localStorage.getItem("userid"),
        "type":"vinfo",
      
            };
            const url=this.url+db;
            return this.http.post(url, object2, this.httpOptions)


    }
    viewdocument(type:string){
      this.userData = JSON.parse(localStorage.getItem('usrData') || '{}')
      this.userid = this.userData
      this.id = this.userid._id;
      console.log(this.id);
      const geturl = `${this.url}rohini-trainee/_design/purchaseDtls/_view/new-view?include_docs=true&keys=["${type + this.id}"]`;
return this.http.get(geturl, this.httpOptions);


    }
  }
 
