import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import Validation from 'src/app/utils/validation';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  hide = true;
  registerForm: FormGroup;
  submitted = false;

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group(
      {
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: [
          '',
          [
            Validators.required,
            Validators.email,
            Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
          ],
        ],
        username: [
          '',
          [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(20)
          ],
        ],
        password: ['', [Validators.required, Validators.minLength(6),Validators.maxLength(20)]],
        confirmPassword: ['', Validators.required],
        phone: ['', Validators.required],
      },
      {
        validator: [Validation.match('password', 'confirmPassword')],
      }
    );
  }

  get rf(): { [key: string]: AbstractControl } {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    // createUser
    this.userService.register(this.registerForm.value).subscribe(
      (data) => {
        // succes
        console.log(data);
        alert('succes');
      },
      (error) => {
        // error
        console.log(error);
        alert('error');
      }
    );
  }

  onReset(): void {
    this.submitted = false;
    this.registerForm.reset();
  }
}
