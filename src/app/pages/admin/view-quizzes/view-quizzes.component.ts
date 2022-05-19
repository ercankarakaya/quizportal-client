import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from 'src/app/components/dialogs/confirmation-dialog/confirmation-dialog.component';
import { ConfirmDialogModel } from 'src/app/models/confirm-dialog.model';
import { ConfigmDialogService } from 'src/app/services/confirm-dialog.service';
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
    private snackbarService: SnackbarService,
    private confirmDialogService: ConfigmDialogService
  ) {}

  ngOnInit(): void {
    this.getAllQuizzes();
  }

  getAllQuizzes() {
    this.quizService.getAllQuizzes().subscribe(
      (response: any) => {
        this.quizzes = response;
        console.log('response all quizzes=>', response);
      },
      (error) => {
        this.snackbarService.error(error);
        Swal.fire('Error!', 'Error in loading data.', 'error');
      }
    );
  }

  deleteQuiz(quizId) {
    this.confirmDialogService.deleteConfirmDialog().subscribe((dialogResult) => {
      if (dialogResult) {
        this.quizService.deleteQuiz(quizId).subscribe(
          (data) => {
            this.quizzes=this.quizzes.filter(quiz=>quiz.id!=quizId);
            Swal.fire('Success','Quiz deleted.' ,'success');
          },
          (error) => {
            this.snackbarService.error(error);
          }
        );
      }
    });
  }

  /*
  deleteQuiz(quizId) {
    Swal.fire({
      icon:'info',
      title:'Are you sure you want to delete?',
      confirmButtonText:'YES',
      showCancelButton:true,
      cancelButtonColor:'red',
      confirmButtonColor:'green'
    }).then(result=>{
      if(result.isConfirmed){
        this.quizService.deleteQuiz(quizId).subscribe(
          (data) => {
            this.quizzes=this.quizzes.filter(quiz=>quiz.id!=quizId);
            Swal.fire('Success','Quiz deleted.' ,'success');
          },
          (error) => {
            this.snackbarService.error(error);
          }
        );
      }
  });
}
*/

}
