import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/model/user.model';
import { LoginService } from 'src/app/services/login.service';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  //  loginData = {
  //    username: '',
  //   password: '',
  //  };

  user: User = new User();

  constructor(
    private snackBarService: SnackbarService,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {}

  formSubmit(event) {
    if (event.submitter.name == 'login') {
      this.login();
    } else if ((event.submitter.name = 'clear')) {
      this.reset();
    }
  }

  login() {
    console.log('login button clicked.');
    if (this.user.username.trim() == '' || this.user.username == null) {
      this.snackBarService.error('Username is required!');
      return;
    }
    if (this.user.password.trim() == '' || this.user.password == null) {
      this.snackBarService.error('Password is required!');
      return;
    }

    this.loginService.generateToken(this.user).subscribe(
      (data: any) => {
        console.log('response data-> ', data);
        // login
        this.loginService.login(data.token);
        this.loginService.getCurrentUser().subscribe((user: any) => {
          this.loginService.setUser(user);
          console.log('response data-> ', user);
          //redirect ..ADMIN dashboard
          //redirect ..NORMAL dashboard
        },
        (error)=>{
          this.snackBarService.error(error);
          console.log('response error-> ', error);
        });
      },
      (error) => {
        this.snackBarService.error(error);
        console.log('response error-> ', error);
      }
    );
  }

  reset() {
    console.log('clear button clicked.');
    this.user = new User();
  }

  reloadPage(): void {
    window.location.reload();
  }
}
