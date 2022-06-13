import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { DatabaseServicesService } from '../database-services.service';
import { DbservicesService } from '../dbservices.service';
import { ToastrService } from 'ngx-toastr';
import * as lodash from 'lodash';

@Component({
  selector: 'app-mycarts',
  templateUrl: './mycarts.component.html',
  styleUrls: ['./mycarts.component.css']
})
export class MycartsComponent implements OnInit {
public product:any=[];
  userData: any | null | undefined;
  constructor(private activatedRouter:ActivatedRoute,private api:DatabaseServicesService,private apis:DbservicesService,   private toastr:ToastrService,private router:Router) {
    activatedRouter.queryParams.subscribe(res=>{
      console.log("Product Res",JSON.parse(res.products))
      this.product = JSON.parse(res.products) 
      this.loadCart()
      console.log("obj2",this.product)
       localStorage.setItem('localCart', JSON.stringify(this.product));
    })
   }
   total: number = 0;
 loadCart() {
  if (localStorage.getItem('localCart')) {
  //  this.product = JSON.parse(localStorage.getItem('localCart'));
  //  this.total = this.product.reduce(function (acc:any, val:any) {
  //   return acc + val.pro_price * val.quantity;
  //  }, 0);
  this.total = 0;
  this.product.forEach((prod:any)=>{
    this.total+= prod['pro_price'] * prod['quantity']
  })
  //  this.total = lodash.sumBy(this.product,'')
  }
//  localStorage.setItem('localCart1','localCart');        

 }

 





  ngOnInit(): void {
  }
  order() {
    this.userData = localStorage.getItem('userid') || '';
    console.log(this.userData);
    const information = {
      type: 'order',
      user: this.userData,
    };
    this.api.add('rohini-trainee', information).subscribe(
      (res: any) => {
        console.log('cart', res);
        const orderId = res.id;
        let taskList: any = [];
        // this.product = JSON.parse(localStorage.getItem('localCart') || '{}');
        this.product.forEach((element:any) => {
          const orderInformation = {
            order: orderId,
            product: element['_id'],
            // productName: element['pro_name'],
            quantity: element['quantity'],
            price: element['pro_price'],
            subtotal: element['pro_price']*element['quantity'],
            type: 'orderInformation',
          };
          taskList.push(
            this.api
            .add('rohini-trainee', orderInformation)
            .subscribe((_res: any) => {
            console.log('after pushed', res);
            return res;
            })
            );
            });
            Promise.all(taskList).then((_result) => {
            this.toastr.success('Your product was added successfully!');
            this.router.navigate(['/orderplaced']);
            });
            },
            (rej) => {
            alert('opps' + rej);
            }
            );
            }
            orderDetails() {
            let data = {
            selector: {
            type: 'order',
            user: this.userData.id,
            },
            };
            }
            backcart(){
              // var lo:any=localStorage.getItem('localCart');
              // var parse:any=JSON.parse(lo);   
              // console.log('NAN Log',parse);
              // this.api.userproducts.push(parse);
              this.router.navigate(['/cart'])
            }
            // deluser(data: any, data1: any) {
            //   this.apis.remove(data._id, data1._rev).subscribe((res) => {
            //     alert('Your Data has been deleted from the database.');
            //     location.reload();
            //   });
            // }


            inc(prod:any){
              // console.log(pro.qnt);
              // pro.qnt =pro.qnt+1;
              if(prod.quantity != 10){
                    prod.quantity+= 1;
                    this.loadCart()
                  }
                }
            
            dec(prod:any){
              // console.log(pro.qnt);
              // pro.qnt =pro.qnt-1;
              if(prod.quantity != 1){
                prod.quantity -= 1;
                this.loadCart()
              
              }
            }
            }
            
            



