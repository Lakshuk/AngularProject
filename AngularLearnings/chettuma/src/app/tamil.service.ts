import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TamilService {

  private url='http://localhost:8080';

  constructor(private lakshmi:HttpClient) { }

  submit(data:any):Observable<any>{
    return this.lakshmi.post(this.url,data);
  }

  tamilk():Observable<any>{
    return this.lakshmi.get(this.url)
  }
}
