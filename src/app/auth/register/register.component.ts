import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  signUpForm: FormGroup;
  isLoading: boolean = false;
  error = null;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {

    this.signUpForm = new FormGroup({
      'username': new FormControl(null, Validators.required),
      'password': new FormControl(null, Validators.required),
      'firstName': new FormControl(null, Validators.required),
      'lastName': new FormControl(null, Validators.required),
      'email': new FormControl(null, [ Validators.email, Validators.required]),
    });

  }

  onSubmit(){
    if(!this.signUpForm.valid){
      return;
    }
    this.isLoading = true;
    // is there a better way to write it down? maybe with interface? I won't use this JSON anymore later
    const username = this.signUpForm.get('username').value;
    const password = this.signUpForm.get('password').value;
    const firstName = this.signUpForm.get('firstName').value;
    const lastName = this.signUpForm.get('lastName').value;
    const email = this.signUpForm.get('email').value;

    console.log(username);
    console.log(password);
    console.log(firstName);
    console.log(lastName);
    console.log(email);

    this.authService.signUp(username, password, firstName, lastName, email)
      .subscribe(
        responseData => {
          console.log(responseData);
          this.isLoading = false;
        }, errorResponse => {
          // replace this with catchError later
          this.error = 'An error occurred! Registration failed';
          this.isLoading = false;
        }
      );

    this.signUpForm.reset();
  }

}
