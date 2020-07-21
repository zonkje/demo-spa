import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../shared/user.model';
import {Subject} from 'rxjs';

@Injectable()
export class AuthService {

  user = new Subject<User>();

  constructor(private http: HttpClient) {
  }

  signIn(username: string, password: string) {
    return this.http.post<any>('http://localhost:8080/login', {
      username: username,
      password: password
    }, {
      observe: 'response'
    });
    /*
    I need somehow create User who logged in. I think I should not return observable but subscribe here.
    In case of success I need to send http get request for user (getUserByUsername?)
    If I subscribe here, how can I provide error handling? (get error.message here and emit by another Subject<string> ?)
    */
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

}
