import { Component, OnInit } from '@angular/core';
import { Quiz } from 'src/app/models/quiz.model';
import { CategoryService } from 'src/app/services/category.service';
import { QuizService } from 'src/app/services/quiz.service';
import { SnackbarService } from 'src/app/services/snackbar.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.css'],
})
export class AddQuizComponent implements OnInit {
  quiz = new Quiz();
  categories = [];

  constructor(
    private quizService: QuizService,
    private categoryService: CategoryService,
    private snackbarService: SnackbarService
  ) {}

  ngOnInit(): void {
    this.getAllCategories();
  }

  getAllCategories() {
    this.categoryService.getAllCategories().subscribe(
      (response: any) => {
        this.categories = response;
      },
      (error) => {
        this.snackbarService.error(error);
        Swal.fire('Error!', 'Error in loading category data.', 'error');
      }
    );
  }

  requiredFieldsNullCheck(): boolean {
    if (
      !this.quiz.title ||
      !this.quiz.description ||
      !this.quiz.category ||
      !this.quiz.maxMarks ||
      !this.quiz.numberOfQuestions
    ) {
      return false;
    }
    return true;
  }

  addQuiz() {
    if (!this.requiredFieldsNullCheck()) return;

    this.quizService.addQuiz(this.quiz).subscribe(
      (data: any) => {
        Swal.fire('Success', 'Quiz has been successfully added.', 'success');
        this.reset();
      },
      (error) => {
        this.snackbarService.error(error);
      }
    );
  }

  reset() {
    this.quiz = new Quiz();
  }
}
