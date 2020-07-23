import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from '../auth/auth.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit, OnDestroy {
  private userSubscription: Subscription;
  isAuthenticated = false;

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {

    this.userSubscription = this.authService.user.subscribe( user => {
      console.log("from heaDER "+user)
      this.isAuthenticated = !!user;
    });

  }

  ngOnDestroy(): void {

    this.userSubscription.unsubscribe();

  }
}
