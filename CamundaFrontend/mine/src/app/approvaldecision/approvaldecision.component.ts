import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-approvaldecision',
  imports: [RouterModule,CommonModule,HttpClientModule],
  templateUrl: './approvaldecision.component.html',
  styleUrl: './approvaldecision.component.css'
})
export class ApprovaldecisionComponent {
  alertMessage: string = '';
  comments: string = '';
  apiUrl: string = 'http://localhost:8080/status';  // Backend API URL
  constructor(private http:HttpClient) {}
  approveLoan() {
    const payload = { decision: 'approved' };
    this.http.post(this.apiUrl, payload).subscribe(
      (response: any) => {
        console.log('Loan approved:', response);
        this.alertMessage = 'Loan request approved!';
        alert('Loan request approved!');
      },
      (error:any) => {
        console.error('Error approving loan:', error);
        this.alertMessage = 'Failed to approve loan!';
        alert('Failed to approve loan!');
      }
    );
  }
  rejectLoan() {
    const payload = { decision: 'rejected' };
    this.http.post(this.apiUrl, payload).subscribe(
      (response: any) => {
        console.log('Loan rejected:', response);
        this.alertMessage = 'Loan request rejected!';
        alert('Loan request rejected!');
      },
      (error:any) => {
        console.error('Error rejecting loan:', error);
        this.alertMessage = 'Failed to reject loan!';
        alert('Failed to reject loan!');
      }
    );
  }
  AdditionalInfoNeeded() {
    const payload = { decision: 'clarification' };
    this.http.post(this.apiUrl, payload).subscribe(
      (response: any) => {
        console.log('AdditionalInfoNeeded:', response);
        this.alertMessage = 'AdditionalInfoNeeded!';
        alert('AdditionalInfoNeeded!');
      },
      (error:any) => {
        console.error('Error AdditionalInfoNeeded:', error);
        this.alertMessage = 'Failed to AdditionalInfoNeeded!';
        alert('Failed to AdditionalInfoNeeded!');
      }
    );
  }

}
