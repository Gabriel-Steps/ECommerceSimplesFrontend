import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private API = "http://localhost:5132/api/auth";

  constructor(private http: HttpClient) {

  }

  public Login(email: string, password: string){
    return this.http.post<any>(`${this.API}/login`, { email, password })
    .pipe(response => {
      return response
    });
  }
}
