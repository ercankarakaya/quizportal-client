import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SnackbarService } from 'src/app/services/snackbar.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
 
  loginData={
    username:"",
    password:""
  };

  constructor(private snackBarService: SnackbarService) {}

  ngOnInit(): void {
    
  }

  formSubmit(){
    console.log('login button clicked.');
    
    if(this.loginData.username.trim()==''||this.loginData.username==null){
        this.snackBarService.error('Username is required!');
    }

  }
  
}
