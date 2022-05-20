import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Quiz } from 'src/app/models/quiz.model';
import { CategoryService } from 'src/app/services/category.service';
import { QuizService } from 'src/app/services/quiz.service';
import { SnackbarService } from 'src/app/services/snackbar.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-quiz',
  templateUrl: './update-quiz.component.html',
  styleUrls: ['./update-quiz.component.css'],
})
export class UpdateQuizComponent implements OnInit {
  quizId = 0;
  quiz: Quiz = new Quiz(); // quiz;
  categories = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private quizService: QuizService,
    private snackbarService: SnackbarService,
    private categoryService: CategoryService,
    private router:Router
  ) {}

  ngOnInit(): void {
    this.quizId = this.activatedRoute.snapshot.params.quizId;
    this.getQuizById(this.quizId);
    this.getAllCategories();
  }

  getQuizById(id) {
    this.quizService.getQuizById(id).subscribe(
      (response) => {
        this.quiz = response;
        console.log('response a quiz=>', this.quiz);
      },
      (error) => {
        this.snackbarService.error(error);
      }
    );
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

  // validation
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

  updateQuiz() {
    if (!this.requiredFieldsNullCheck()) return;
    this.quizService.updateQuiz(this.quiz).subscribe(
      (data) => {
        Swal.fire('Success', 'Quiz has been successfully updated.', 'success').then(e=>{
          this.router.navigate(['/admin/quizzes']);
        });
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
