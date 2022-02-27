import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user.model';
import { AuthService } from 'src/app/services/auth/auth.service';
import { TokenStorageService } from 'src/app/services/auth/token-storage.service';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  user: User = new User();

  constructor(
    private snackBarService: SnackbarService,
    private authService: AuthService,
    private tokenService: TokenStorageService,
    private userService:UserService
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

    // login
    this.authService.signin(this.user).subscribe(
      (data: any) => {
        console.log('response data-> ', data);
        this.tokenService.setToken(data.token);
        this.authService.getCurrentUser().subscribe(
          (user: any) => {
            this.tokenService.setUser(user);
            console.log('response data-> ', user);
            //redirect ..ADMIN dashboard
            //redirect ..NORMAL dashboard
          },
          (error) => {
            this.snackBarService.error(error);
            console.log('response error-> ', error);
          }
        );
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
