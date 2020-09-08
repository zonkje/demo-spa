import {Component, ComponentFactoryResolver, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
import {AlertComponent} from '../../shared/alert/alert.component';
import {PlaceholderDirective} from '../../shared/placeholder/placeholder.directive';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  signInForm: FormGroup;
  isLoading: boolean = false;
  error = null;
  @ViewChild(PlaceholderDirective) alertHost: PlaceholderDirective;

  private closeSub: Subscription;

  constructor(private authService: AuthService, private router: Router, private componentFactoryResolver: ComponentFactoryResolver) {
  }

  ngOnInit(): void {

    this.signInForm = new FormGroup({
      'username': new FormControl(null, Validators.required),
      'password': new FormControl(null, Validators.required)
    });

  }

  onSubmit() {
    if (!this.signInForm.valid) {
      return;
    }
    const username = this.signInForm.get('username').value;
    const password = this.signInForm.get('password').value;

    this.isLoading = true;
    this.authService.signIn(username, password).subscribe(
      responseData => {
        this.isLoading = false;
        this.router.navigate(['/posts']);
      },
      responseError => {
        console.log(responseError);
        // change it after improving api
        this.error = 'An error occurred! Login failed';
        this.showError(responseError + ' <- need to improve messages for responses with 4xx/5xx');
        this.isLoading = false;
      }
    );

    this.signInForm.reset();
  }

  private showError(message: string) {
    const alertComponentFactory = this.componentFactoryResolver.resolveComponentFactory(AlertComponent);
    const hostViewContainerRef = this.alertHost.viewContainerRef;
    hostViewContainerRef.clear();
    const componentRef = hostViewContainerRef.createComponent(alertComponentFactory);

    componentRef.instance.message = message;
    this.closeSub = componentRef.instance.close.subscribe(()=>{
      this.closeSub.unsubscribe();
      hostViewContainerRef.clear();
    })
  }

  ngOnDestroy(): void {

    if(this.closeSub){
      this.closeSub.unsubscribe();
    }

  }



}
