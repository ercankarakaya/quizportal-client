import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_API_URL } from '../utils/helper';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  constructor(private http: HttpClient) {}

  //create new quiz
  public addQuiz(quiz: any) {
    return this.http.post(`${BASE_API_URL}/quiz/save`, quiz);
  }

  //get all the quizzes
  public getAllQuizzes() {
    return this.http.get(`${BASE_API_URL}/quiz/all`);
  }
}
