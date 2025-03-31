import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../api.service';
import { response } from 'express';
import { error } from 'console';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-signup',
  imports: [ReactiveFormsModule,CommonModule,FormsModule,RouterModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  signupForm:FormGroup|any

  constructor(private api:ApiService){
    this.signupForm=new FormGroup({
      email:new FormControl(''),
      username:new FormControl(''),
      password:new FormControl('')
    })
  }
  onSubmit(){
    const data=this.signupForm.value;
    console.log(data)
    this.register(data);
  }

  register(data:any):void{
    this.api.signup(data).subscribe(
      (response) =>{
        console.log("The crt response",response)
      },(error)=>{
        console.log(error)
      }
    )
  }

}
