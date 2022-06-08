import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm, FormBuilder, Validators } from '@angular/forms';
// import { DashboardService } from '../dashboard.service';
import { DbservicesService } from '../dbservices.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactform!: FormGroup;
  value: boolean = true;
  constructor(private api: DbservicesService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.contactform = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      message: ['', Validators.required],
    });
  }
  
  }

