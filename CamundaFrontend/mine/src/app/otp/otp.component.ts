import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../api.service';
import { response } from 'express';
import { error } from 'console';
import { Router } from '@angular/router';

@Component({
  selector: 'app-otp',
  imports: [ReactiveFormsModule,CommonModule,FormsModule],
  templateUrl: './otp.component.html',
  styleUrl: './otp.component.css'
})
export class OtpComponent {
  otpForm:FormGroup|any
  constructor(private api:ApiService,private router:Router){
    this.otpForm=new FormGroup({
      email:new FormControl(''),
      otp:new FormControl('')
  })
  }

  onsubmit(){
    const data=this.otpForm.value;
    console.log(data);
    this.otpvalidate(data.otp,data.email);
  }
 
  otpvalidate(otp:any,email:any):void{
   this.api.otp(otp,email).subscribe(
    (response)=>{
      console.log(response);
      this.router.navigate(['/address'])
    },(error)=>{
      console.log(error)
    }
   )
  }

}
