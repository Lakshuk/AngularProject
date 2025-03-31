import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TamilService } from '../tamil.service';
import { response } from 'express';
import { error } from 'console';

@Component({
  selector: 'app-lakshka',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './lakshka.component.html',
  styleUrl: './lakshka.component.css'
})
export class LakshkaComponent {

  form : FormGroup|any
  datas:any

  constructor(private api:TamilService){
    this.form=new FormGroup({
      name:new FormControl(),
      number: new FormControl(),
      email:new FormControl()
    })
  }
  
  onSubmit(){
    console.log(this.form.value);
    //this.datas=this.form.value
    const data=this.form.value
    this.api.submit(data).subscribe(
      (response)=>{
        console.log(response);
      },
      (error)=>{
        console.error(error)
      }
    )
  }
}
