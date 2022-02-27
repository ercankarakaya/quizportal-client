import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user.model';
import { BASE_API_URL, keys } from '../utils/helper';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}


  // create user
  public createUser(user: any) {
    return this.http.post(`${BASE_API_URL}/user/save`, user);
  }

  // get all user
  public getAllUser() {
    return this.http.get(`${BASE_API_URL}/user/all`);
  }

  public getUserByUsername(username:string){
    return this.http.get(`${BASE_API_URL}/user/${username}`);
  }
 
}
