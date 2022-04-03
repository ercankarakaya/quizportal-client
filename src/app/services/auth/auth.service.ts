import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginRequest } from 'src/app/model/login-request';
import { BASE_API_URL, keys } from '../../utils/helper';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(private http: HttpClient) {}


  // login and generate token
  public signin(user: LoginRequest) {
    return this.http.post(`${BASE_API_URL}/auth/signin`, user);
  }

   // register user
   public signup(user: any) {
    return this.http.post(`${BASE_API_URL}/auth/signup`,user);
  }

  // get current user
  public getCurrentUser() {
    return this.http.get(`${BASE_API_URL}/auth/current-user`);
  }

}
