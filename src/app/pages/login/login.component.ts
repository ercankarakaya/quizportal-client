import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginRequest } from 'src/app/model/login-request';
import { AuthService } from 'src/app/services/auth/auth.service';
import { TokenStorageService } from 'src/app/services/auth/token-storage.service';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { UserService } from 'src/app/services/user.service';
import { roles } from 'src/app/utils/helper';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loginRequest: LoginRequest = new LoginRequest();

  constructor(
    private snackBarService: SnackbarService,
    private authService: AuthService,
    private tokenService: TokenStorageService,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  formSubmit(event) {
    if (event.submitter.name == 'login') {
      this.login();
    } else if ((event.submitter.name = 'clear')) {
      this.reset();
    }
  }

  login() {
    console.log('login button clicked.');
    this.loginRequest.username=this.loginForm.get('username').value;
    this.loginRequest.password=this.loginForm.get('password').value;

    // login
    this.authService.signin(this.loginRequest).subscribe(
      (data: any) => {
        console.log('response data-> ', data);
        this.tokenService.setToken(data.token);
        this.authService.getCurrentUser().subscribe(
          (user: any) => {
            this.tokenService.setUser(user);
            console.log('response data-> ', user);

            if (this.tokenService.getUserRole() == roles.ADMIN) {
              // redirect ..ADMIN dashboard
              // this.router.navigate(['admin']);
              window.location.href = '/admin';
            } else if (this.tokenService.getUserRole() == roles.USER) {
              // edirect ..NORMAL dashboard
              // this.router.navigate(['user-dashboard']);
              window.location.href = '/user-dashboard';
            } else {
              this.tokenService.logout();
            }
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
    this.loginRequest = new LoginRequest();
  }

  reloadPage(): void {
    window.location.reload();
  }
}
