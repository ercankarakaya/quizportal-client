import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';
import { SnackbarService } from 'src/app/services/snackbar.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-quizzes',
  templateUrl: './view-quizzes.component.html',
  styleUrls: ['./view-quizzes.component.css'],
})
export class ViewQuizzesComponent implements OnInit {
  quizzes = [];

  constructor(
    private quizService: QuizService,
    private snackbarService: SnackbarService
  ) {}

  ngOnInit(): void {
    this.getAllQuizzes();
  }

  getAllQuizzes() {
    this.quizService.getAllQuizzes().subscribe((response: any) => {
      this.quizzes = response;
      console.log('response all quizzes=>', response);
    },
    (error)=>{
      this.snackbarService.error(error);
      Swal.fire('Error!','Error in loading data.','error');
    }
    );
  }
}
