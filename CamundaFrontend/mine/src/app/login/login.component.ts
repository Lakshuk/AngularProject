import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../api.service';
import { response } from 'express';
import { error } from 'console';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule,CommonModule,FormsModule,RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginform:FormGroup|any
  constructor(private api:ApiService,private router:Router){
    this.loginform=new FormGroup({
      email:new FormControl(''),
      password:new FormControl('')
    })
  }

  onsubmit(){
    const data=this.loginform.value;
    console.log(data);
    this.signin(data.email,data.password);

  }

  signin(email:any,password:any):void{
    this.api.login(email,password).subscribe(
      (response) =>{
        console.log(response);
        const token=response.message;
        if(token==='login successfull'){
          this.router.navigate(['/home']);
        }else{
          alert('login is failed enter the crt credentials');
        }

      },(error) =>{
        console.log(error)
      }
    )

  }

}
