import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

   private url='http://localhost:8080'

 public signup(data:any):Observable<any>{
  return this.http.post( `${this.url}/signup`,data);
 }

 public login(email:any,password:any):Observable<any>{
  return this.http.post(`${this.url}/login?email=${email}&password=${password}`,{responseType:'text'});
 }
  
 public mailsubmission(data:any):Observable<any>{
    return this.http.post(`${this.url}/start`,data,{ responseType: 'text' }  );
  }

  public otp(otp:any,email:any):Observable<any>{
    return this.http.post(`${this.url}/submit-otp?otp=${otp}&email=${email}`,{responseType:'text'});
  }

  public address(data:any):Observable<any>{
    return this.http.post(`${this.url}/triggerSecondmsg`,data);
  }

  public getProcessStatus(processInstanceKey:any):Observable<any>{
    return this.http.get<any>(`${this.url}/process-status/${processInstanceKey}`);
  }

  public user(data:FormData):Observable<any>{
    return this.http.post(`${this.url}/userdeatails`,data);
  }


}
