import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class DbservicesService {
  logindata(FormValue: NgForm) {
    throw new Error('Method not implemented.');
  }
  constructor(private http: HttpClient) {}

  signupdata(formobject: any) {
    return this.http.post('http://localhost:8000/postquery', formobject);
  }
  // billingdata(formobject: any) {
  //   return this.http.post('http://localhost:8000/post_query', formobject);
  // }

  getUser() {
    return this.http.get('http://localhost:8000/getUser/');
  }
  getUserId(id: any) {
    return this.http.get(`http://localhost:8000/getUserId/${id}`);
  }

  // getbill() {
  //   return this.http.get('http://localhost:8000/getbill/');
  // }

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
}