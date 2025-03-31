import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-seniordoc',
  imports: [ReactiveFormsModule, CommonModule, RouterModule,HttpClientModule],
  templateUrl: './seniordoc.component.html',
  styleUrl: './seniordoc.component.css'
})
export class SeniordocComponent {
  private Url = "http://localhost:8080/Senior";
    private http: HttpClient;
    private submit(data: FormData): Observable<any> {
      return this.http.post(this.Url, data);
    }
    constructor(http: HttpClient) {
      this.http = http;
    }
    public uploadForm = new FormGroup({
      propertyownershipproof: new FormControl(null, Validators.required),
      mortgagecounselingcertificate: new FormControl(null, Validators.required)
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
