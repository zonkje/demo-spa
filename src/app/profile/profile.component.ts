import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from '../auth/auth.service';
import {Subscription} from 'rxjs';
import {User} from '../shared/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnDestroy {

  private userSubscription: Subscription;
  user: User;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.userSubscription = this.authService.user.subscribe(
      (user: User) => {
        // there is some bug: this code never gets executed
        console.log("inside subscription "+user);
        this.user = user;
      }, error => {
        console.log(error);
      }
    );

  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }
}
