import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_API_URL } from '../utils/helper';

@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  constructor(private http: HttpClient) {}

  // create new question
  public addQuestion(question: any) {
    return this.http.post(`${BASE_API_URL}/question/save`, question);
  }

  // get all the questions
  public getAllQuestions() {
    return this.http.get(`${BASE_API_URL}/question/all`);
  }

  // update question
  public updateQuestion(question: any) {
    return this.http.put(`${BASE_API_URL}/question/update`, question);
  }

  // delete question
  public deleteQuestion(id: number) {
    this.http.delete(`${BASE_API_URL}/question/${id}`);
  }

  // get the by question id
  public getQuestionById(id: number) {
    return this.http.get(`${BASE_API_URL}/question/${id}`);
  }

  // get the by quiz id
  public getAllQuestionsByQuizId(quizId: number) {
    return this.http.get(`${BASE_API_URL}/question/by-quiz/${quizId}`);
  }
}
