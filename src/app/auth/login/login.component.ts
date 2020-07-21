import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  signInForm: FormGroup;
  isLoading: boolean = false;
  error = null;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {

    this.signInForm = new FormGroup({
      'username': new FormControl(null, Validators.required),
      'password': new FormControl(null, Validators.required)
    });

  }

  onSubmit(){
    if(!this.signInForm.valid){
      return;
    }
    const username = this.signInForm.get('username').value;
    const password = this.signInForm.get('password').value;

    this.isLoading = true;
    this.authService.signIn(username, password).subscribe(
      responseData => {
        console.log(responseData);                              // BUG: getting empty HttpResponse
        console.log(responseData.headers.get('Authorization')); // BUG: getting null
        this.isLoading = false;
      },
      responseError => {
        console.log(responseError);
        // change it after improving api
        this.error = 'An error occurred! Login failed';
        this.isLoading = false;
      }
    );

    this.signInForm.reset();
  }

}
