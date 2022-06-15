import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  
  constructor(private router:Router) { // To Do Comment 
  } 

  ngOnInit(): void {
    // TO DO document why this method 'ngOnInit' is empty
  
  }
  logout(){
    localStorage.clear();
    this.router.navigate(['/login'])
  }


}
