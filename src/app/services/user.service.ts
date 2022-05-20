import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASE_API_URL, keys } from '../utils/helper';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}


  // create user
  public createUser(user: any):Observable<any>  {
    return this.http.post(`${BASE_API_URL}/user/save`, user);
  }

  // get all user
  public getAllUser():Observable<any>  {
    return this.http.get(`${BASE_API_URL}/user/all`);
  }

  public getUserByUsername(username:string):Observable<any> {
    return this.http.get(`${BASE_API_URL}/user/${username}`);
  }
 
}
