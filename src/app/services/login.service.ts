import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user.model';
import BASE_API_URL from '../utils/helper';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  // get current user
  public getCurrentUser(){
    return this.http.get(`${BASE_API_URL}/auth/current-user`);
  }

  // generate token
  public generateToken(user: User) {
    return this.http.post(`${BASE_API_URL}/auth/generate-token`, user);
  }

  //login user: set token to localStorage
  public login(token) {
    localStorage.setItem('token', token);
    return true;
  }

  // isLogin: user is logged in or not
  public isLoggedIn() {
    let tokenStr = this.getToken();
    if (tokenStr == undefined || tokenStr == '' || tokenStr == null) {
      return false;
    }
    return true;
  }

  //logout: remove token from localStorage
  public logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return true;
  }

  // get token from localStorage
  public getToken() {
    return localStorage.getItem('token');
  }

  //set User to localStorage
  public setUser(user) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  // get User from localStorage
  public getUser() {
    let user = localStorage.getItem('user');
    if (user != null) {
      return JSON.parse(user);
    } else {
      this.logout();
      return null;
    }
  }

  // get user role
  public getUserRole() {
    let user = this.getUser();
    return user.authorities[0].authority; //user.roles[0].name;
  }
}
