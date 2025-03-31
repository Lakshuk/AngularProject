import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-document',
  imports: [ReactiveFormsModule, CommonModule, RouterModule],
  templateUrl: './document.component.html',
  styleUrl: './document.component.css'
})
export class DocumentComponent {

  private Url = "http://localhost:8080/extra";
  private http: HttpClient;
  private submit(data: FormData): Observable<any> {
    return this.http.post(this.Url, data);
  }
  constructor(http: HttpClient) {
    this.http = http;
  }
  public uploadForm = new FormGroup({
    bank_statement: new FormControl(null, Validators.required),
    income_tax_return: new FormControl(null, Validators.required),
    appointment_letter: new FormControl(null, Validators.required),
    business_certificate: new FormControl(null, Validators.required)
  });
  public onFileChange(event: any, field: string) {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      this.uploadForm.get(field)?.setValue(selectedFile);
    } else {
      this.uploadForm.get(field)?.reset();
    }
  }
  public uploadDocument() {
    const data = new FormData();
    Object.keys(this.uploadForm.controls).forEach(key => {
      const controlValue = this.uploadForm.get(key)?.value;
      if (controlValue) {
        data.append(key, controlValue, controlValue.name);
      }
    });
    this.http.post(this.Url, data).subscribe(
      (response: any) => {
        console.log('Upload successful:', response);
        this.uploadForm.reset();
        alert('Document uploaded successfully!');
      },
      (error : any) =>
        console.error('Upload failed:', error)
    );
  }

}
