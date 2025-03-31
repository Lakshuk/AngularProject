import { Component } from '@angular/core';
import { TamilService } from '../tamil.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-tamil',
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './tamil.component.html',
  styleUrl: './tamil.component.css'
})
export class TamilComponent {
  loginform:FormGroup|any

  constructor(private api:TamilService){
    this.loginform=new FormGroup({
      email:new FormControl(''),
      password:new FormControl('')
    })
  }

  onsubmit(){
    const data=this.loginform.value;
    this.api.submit(data);

  }

}
