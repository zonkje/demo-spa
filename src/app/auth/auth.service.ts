import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../shared/user.model';
import {BehaviorSubject, Subject} from 'rxjs';
import {tap} from 'rxjs/operators';
import {Router} from '@angular/router';
import {environment} from '../../environments/environment';

@Injectable()
export class AuthService {

  user = new BehaviorSubject<User>(null);
  token = new BehaviorSubject<string>(null);
  private tokenExpirationTimer: any;

  constructor(private http: HttpClient, private router: Router) {
  }

  signIn(username: string, password: string) {
    return this.http.post<any>(environment.host+'login', {
      username: username,
      password: password
    }, {
      observe: 'response'
    }).pipe(
      tap(
        responseData => {
          const token = responseData.headers.get('Authorization');
          const tokenExpirationTime = responseData.headers.get('Token-Exp-Days');
          this.token.next(token);
          const userId = responseData.headers.get('UserID');
          this.getUserById(userId).subscribe(user => {
            const loggedUser = new User(user.id, user.firstName, user.lastName, user.email);
            this.user.next(loggedUser);
            this.autoLogout(+tokenExpirationTime*86400000);
            localStorage.setItem('userData', JSON.stringify(loggedUser));
          });
          localStorage.setItem('token', token);
          localStorage.setItem('tokenExpirationTime', tokenExpirationTime);
        }
      )
    );
  }

  signUp(username: string, password: string, firstName: string, lastName: string, email: string) {
    return this.http.post<User>(environment.host+'register', {
      username: username,
      password: password,
      firstName: firstName,
      lastName: lastName,
      email: email
    });
  }

  autoLogin() {
    const userData: User = JSON.parse(localStorage.getItem('userData'));
    const storedToken: string = localStorage.getItem('token');
    if (!userData) {
      return;
    }
    const loadedUser = new User(userData.id, userData.firstName, userData.lastName, userData.email);
    // We need to calculate the time to expiry
    // this.autoLogout();
    this.user.next(loadedUser);
    this.token.next(storedToken);
  }

  logout() {
    this.user.next(null);
    this.router.navigate(['/login']);
    localStorage.removeItem('userData');
    localStorage.removeItem('token');
    localStorage.removeItem('tokenExpirationTime');
    if (this.tokenExpirationTimer) {
      clearTimeout(this.tokenExpirationTimer);
    }
    this.tokenExpirationTimer = null;
  }

  autoLogout(expirationDuration: number) {
    this.tokenExpirationTimer = setTimeout(() => {
      this.logout();
    }, expirationDuration);
  }

  private getUserById(id: string) {
    return this.http.get<User>(environment.host+'user/' + id);
  }

}
