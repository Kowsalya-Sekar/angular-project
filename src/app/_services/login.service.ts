import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  private loginUrl = " https://api.escuelajs.co/api/v1/auth/login";

  login(credentials: any): Observable<any> {
    return this.http.post<any>(this.loginUrl, credentials); // Return the observable
  }
}
