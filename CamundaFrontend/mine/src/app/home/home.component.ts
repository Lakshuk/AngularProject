import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ApiService } from '../api.service';
import { response } from 'express';
import { error } from 'console';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [ReactiveFormsModule,CommonModule,FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  emailForm:FormGroup | any;
  
  constructor(private api:ApiService,private router:Router){
    this.emailForm = new FormGroup({
      email:new FormControl('')
    });
  }

 onsubmit(){
  const data=this.emailForm.value;
  console.log(data);
  this.emailsubmit(data);
 }

 emailsubmit(data:any):void{
  this.api.mailsubmission(data).subscribe(
    (response)=>{
      console.log(response);
      this.router.navigate(['/otp']);
    },(error) =>{
      console.log(error);
    }
  )
 }


}
