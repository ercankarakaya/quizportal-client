import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Question } from 'src/app/models/question.model';
import { QuestionService } from 'src/app/services/question.service';
import { SnackbarService } from 'src/app/services/snackbar.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css'],
})
export class AddQuestionComponent implements OnInit {
  /* variables */
  quizId;
  quizTitle;
  question = new Question();
  options = [];
  selectedOption='';

  /* stepper form groups*/
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  isLinear = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private _formBuilder: FormBuilder,
    private questionService: QuestionService,
    private snackbarService: SnackbarService
  ) {}

  ngOnInit(): void {
    this.quizTitle = this.activatedRoute.snapshot.params.title;
    this.quizId = this.activatedRoute.snapshot.params.quizId;
    this.question.quiz['id'] = this.quizId;
    this.createFormGroups();
  }


  createFormGroups() {
    this.firstFormGroup = this._formBuilder.group({
      questionContentCtrl: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      option1: ['', Validators.required],
      option2: ['', Validators.required],
      option3: ['', Validators.required],
      option4: ['', Validators.required],
      answer: ['', Validators.required],
    });
  }


  addQuestion() {
    this.question.content = this.firstFormGroup.get( 'questionContentCtrl').value;
    this.question.option1 = this.secondFormGroup.get('option1').value;
    this.question.option2 = this.secondFormGroup.get('option2').value;
    this.question.option3 = this.secondFormGroup.get('option3').value;
    this.question.option4 = this.secondFormGroup.get('option4').value;
    this.question.answer =  this.secondFormGroup.get('answer').value;

    this.questionService.addQuestion(this.question).subscribe(
      (data: any) => {
        Swal.fire(
          'Success',
          'Question has been successfully added.',
          'success'
        );
        this.clear();
      },
      (error) => {
        this.snackbarService.error(error);
      }
    );
  }

  clear() {
    this.firstFormGroup.reset();
    this.secondFormGroup.reset();
  }
}
