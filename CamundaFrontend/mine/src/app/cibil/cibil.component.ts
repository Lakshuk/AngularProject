import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-cibil',
  imports: [CommonModule,ReactiveFormsModule,FormsModule],
  templateUrl: './cibil.component.html',
  styleUrl: './cibil.component.css'
})
export class CibilComponent {
  cibilform:FormGroup|any;
  documentName: string = '';
  formData: FormData = new FormData();
  fileName: string | undefined;
  constructor(private api:ApiService){
    this.cibilform=new FormGroup({
      fullname:new FormControl(''),
      dateofbirth:new FormControl(''),
      gender:new FormControl(''),
      marital_status:new FormControl(''),
      nationality:new FormControl(''),
      current_address:new FormControl(''),
      permanent_address:new FormControl(''),
      company_name:new FormControl(''),
      designation:new FormControl(''),
      company_address:new FormControl(''),
      phonenumber:new FormControl(''),
      alternate_phone_number:new FormControl(''),
      age:new FormControl(''),
      aadharnumber:new FormControl(''),
      employeetype:new FormControl(''),
      annualincome:new FormControl(''),
      loan_amount:new FormControl(''),
      loan_purpose:new FormControl(''),
      document_path:new FormControl(''),
      
    })
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    const file = input?.files?.[0];
    
    if (file) {
      this.fileName = file.name;  // Update the fileName property with the selected file name
    } else {
      this.fileName = '';  // Clear the fileName if no file is selected
    }
  }
 
  onsubmit() {
    if (this.cibilform.invalid) {
      return;
    }

    const formData = new FormData();

  
    formData.append('userModel', JSON.stringify(this.cibilform.value));

   
    const fileInput = (document.getElementById('document_path') as HTMLInputElement)?.files?.[0];
    
    if (fileInput) {
      formData.append('document', fileInput, fileInput.name);
    } else {
      console.error('No file selected');
      alert('Please select a file before submitting.');
      return;
    }

    
    this.api.user(formData).subscribe(
      (response) => {
        console.log('Response:', response);
      },
      (error) => {
        console.error('Error:', error);
        alert('There was an error with your submission.');
      }
    );
  }
  
  
}
