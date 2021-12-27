import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import BASE_API_URL from '../utils/helper';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  // create user
  public register(user: any) {
    return this.http.post(`${BASE_API_URL}/user/save`,user);
  }
}
