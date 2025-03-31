import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../api.service';
import { response } from 'express';
import { error } from 'console';
import { Router } from '@angular/router';
@Component({
  selector: 'app-userdetails',
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './userdetails.component.html',
  styleUrl: './userdetails.component.css'
})
export class UserdetailsComponent {
  userform:FormGroup|any;

  constructor(private api:ApiService,private router:Router){
    this.userform=new FormGroup({
      name:new FormControl(''),
      query:new FormControl(''),
      state:new FormControl(''),
      postalCode:new FormControl('')
    })
  }

  onsubmit(){
    const data=this.userform.value;
    console.log(data)
    this.Address(data);
  }

  Address(data: any): void {
    this.api.address(data).subscribe(
        (response: any) => {
            console.log("Full Response:", response); 
            
            if (response && response.processInstanceKey) {
                const processInstanceKey = response.processInstanceKey;
                console.log("Extracted Process Instance Key:", processInstanceKey);
                this.checkProcessStatus(processInstanceKey);
            } else {
                console.error("processInstanceKey is missing in the response");
            }
        },
        (error) => {
            console.error("Error:", error);
        }
    );
}

  
  checkProcessStatus(processInstanceKey: number): void {
    const interval = setInterval(() => {
      this.api.getProcessStatus(processInstanceKey).subscribe(
        (response: any) => {
          console.log("Process Status:", response.status);
  
          if (response.status === "ADDRESS_VALID") {
            clearInterval(interval);
            this.router.navigate(['/cibil']);
          } else if (response.status === "ADDRESS_NOT_VALID") {
            clearInterval(interval);
            alert("Address is not valid. Please enter a valid address.");
          }
        },
        (error:any) => {
          console.log(error);
        }
      );
    }, 2000);
  }
  
}
