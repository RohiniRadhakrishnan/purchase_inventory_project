import { Injectable } from '@angular/core';
import{HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { NgForm } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class DatabaseServicesService {
  fetchData(_arg0: string) {
    throw new Error('Method not implemented.');
  }
  userid: any;
  userData: any;
  id: any;
  cartcount:number = 0;
  userproducts:any=[];
  public userItemList:any=[];
  public userlist = new BehaviorSubject<any>([]);

  logindata(_FormValue: NgForm) {
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
    const url=this.url+db;
    return this.http.post(url, doc, this.httpOptions)
  }
  
  get(db:string): Observable<{}>{
    const url = this.url+db+'/_all_docs?include_docs=true';
    return this.http.get(url,this.httpOptions)

  }
  getall(db:string, id:number): Observable<{}>{
      const url = this.url+db+id;
      return this.http.get(url, this.httpOptions)
     }
    updateData(changedValue:object, db: string, id: number, rev: number) {
    
      const changeObj = changedValue;
      const url = `${this.url + db}/${id}?rev=${rev}`;
      return this.http.put(url, changeObj, this.httpOptions);
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
    viewdocument(type:string,id:any){
      const geturl = `${this.url}rohini-trainee/_design/purchaseDtls/_view/new-view?include_docs=true`;
      const doc ={
        "keys":[type+id]
       }  
      return this.http.post(geturl,doc,this.httpOptions);


    }
    postByTypedUser( id: any) {
      let url = this.url + 'rohini-trainee/_find'
      let typedData = {
        selector: {
 
          order: id
        },
      };
      return this.http.post(url, typedData, this.httpOptions)
  
    }
    fetchDataByType(type:string,id:any){
        const url=this.url+'rohini-trainee'+'/'+'_design/' +'purchaseDtls/' + '_view/' + 'new-view' + '?include_docs=true';
        const doc ={
         "keys":[type+id]
        }
        return this.http.post(url,doc,this.httpOptions);
       }
userDetail(selectorObject: any, db: string) {
        const url = `${this.url + db}/_find`;
        const basicAuth = 'Basic ' + btoa(this. dbUserName + ':' + this.  dbPassword);
        const object = {
        selector: selectorObject,
        };
        return this.http.post(url, object, {
        headers: { Authorization: basicAuth },
        });
        }

getAllOrderByIds(key:any)
{
  const url = `${this.url}rohini-trainee/_all_docs?include_docs=true&keys=[${key}]`;
  return this.http.get(url,this.httpOptions);
}
getAllOrderByIdsPost(key:any)
{
  const url = `${this.url}rohini-trainee/_all_docs?include_docs=true`;
  const data = {keys:key}
  return this.http.post(url,data ,this.httpOptions);
}

FindApiCall(selector:any){
  let url = this.url + 'rohini-trainee/_find'
  let typedData = {
    selector:selector
  };
  return this.http.post(url, typedData, this.httpOptions)

}
count(){
  this.cartcount++;
}  
removeCartItem(user: any) {
  this.userItemList.map((a: any, index: any) => {
    if (user._id === a._id) {
      this.userItemList.splice(index, 1);
    }
  })
  this.userlist.next(this.userItemList);
}

        
      
      
  }
 
