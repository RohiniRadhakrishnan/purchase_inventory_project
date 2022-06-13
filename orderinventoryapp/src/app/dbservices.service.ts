import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class DbservicesService {
  logindata(_FormValue: NgForm) {
    throw new Error('Method not implemented.');
  }
  constructor(private http: HttpClient) {}

  signupdata(formobject: any) {
    return this.http.post('http://localhost:8000/postquery', formobject);
  }


  getUser() {
    return this.http.get('http://localhost:8000/getUser/');
  }
  getUsers(data:any) {
    return this.http.post(`http://localhost:8000/getUsers/`,data);
  }
  getUserId(id: any) {
    return this.http.get(`http://localhost:8000/getUserId/${id}`);
  }


  remove(id: any, id1: any) {
    return this.http.delete(`http://localhost:8000/delete/${id}/${id1}`);
  }

  //admin
  getadmin() {
    return this.http.get('http://localhost:8000/getadmin/');
  }
  getadminId(id: any) {
    return this.http.get(`http://localhost:8000/getadminId/${id}`);
  }
  getshopname() {
    return this.http.get('http://localhost:8000/getadmin/');
  }
  getvtype() {
    return this.http.get('http://localhost:8000/getadmin/');
  }
  
}