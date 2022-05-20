import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASE_API_URL } from '../utils/helper';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  constructor(private http: HttpClient) {}

  //create new quiz
  public addQuiz(quiz: any): Observable<any> {
    return this.http.post(`${BASE_API_URL}/quiz/save`, quiz);
  }

  //get all the quizzes
  public getAllQuizzes(): Observable<any> {
    return this.http.get(`${BASE_API_URL}/quiz/all`);
  }

  //delete quiz
  public deleteQuiz(id: number): Observable<any> {
    return this.http.delete(`${BASE_API_URL}/quiz/${id}`, {
      responseType: 'text',
    });
  }

  //update quiz
  public updateQuiz(quiz: any): Observable<any> {
    return this.http.put(`${BASE_API_URL}/quiz/update`, quiz);
  }
}
