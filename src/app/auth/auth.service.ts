import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../shared/user.model';
import {BehaviorSubject, Subject} from 'rxjs';
import {tap} from 'rxjs/operators';

@Injectable()
export class AuthService {

  user = new BehaviorSubject<User>(null);
  token = new BehaviorSubject<string>(null);

  constructor(private http: HttpClient) {
  }

  signIn(username: string, password: string) {
    return this.http.post<any>('http://localhost:8080/login', {
      username: username,
      password: password
    }, {
      observe: 'response'
    }).pipe(
      tap(
        responseData => {
          this.token.next(responseData.headers.get('Authorization'));
          const userId = responseData.headers.get('UserID');
          this.getUserById(userId);
        }
      )
    );
  }

  signUp(username: string, password: string, firstName: string, lastName: string, email: string) {
    return this.http.post<User>('http://localhost:8080/register', {
      username: username,
      password: password,
      firstName: firstName,
      lastName: lastName,
      email: email
    });
  }

  private getUserById(id: string) {
    this.http.get<User>('http://localhost:8080/user/' + id)
      .subscribe(user => {
        console.log(user);
        const loggedUser = new User(user.id, user.firstName, user.lastName, user.email);
        console.log('after User constructor');
        console.log(loggedUser);
        this.user.next(loggedUser);
      });
  }

}
