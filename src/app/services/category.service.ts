import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASE_API_URL } from '../utils/helper';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private http: HttpClient) {}

  //create new category
  public addCategory(category: any):Observable<any>  {
    return this.http.post(`${BASE_API_URL}/category/save`, category);
  }

  //get all the categories
  public getAllCategories():Observable<any>  {
    return this.http.get(`${BASE_API_URL}/category/all`);
  }
}
