import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import { SnackbarService } from 'src/app/services/snackbar.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-quiz-questions',
  templateUrl: './view-quiz-questions.component.html',
  styleUrls: ['./view-quiz-questions.component.css'],
})
export class ViewQuizQuestionsComponent implements OnInit {
  /** Variables */
  quizId;
  quizTitle;
  questions = [];
  

  constructor(
    private activatedRoute: ActivatedRoute,
    private questionService: QuestionService,
    private snackbarService: SnackbarService
  ) {
  }

  ngOnInit(): void {
    this.quizId = this.activatedRoute.snapshot.params.quizId;
    this.quizTitle = this.activatedRoute.snapshot.params.title;
    console.log('quizId : ' + this.quizId + ' , quizTitle : ' + this.quizTitle);
    this.getAllQuestionByQuizId(this.quizId);
  }

  getAllQuestionByQuizId(quizId) {
    this.questionService.getAllQuestionsByQuizId(quizId).subscribe(
      (data: any) => {
        this.questions = data;
        console.log('Questions of Quiz:'+quizId+' -> ',this.questions);
        if(this.questions.length==0){
          Swal.fire('Warn','Question not found for '+this.quizTitle+'!','warning');
        }
      },
      (error) => {
        this.snackbarService.error(error);
      }
    );
  }

}
