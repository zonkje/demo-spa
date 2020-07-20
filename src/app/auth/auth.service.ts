import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {User} from '../shared/user.model';
import {first, tap} from 'rxjs/operators';
import {log} from 'util';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) {
  }

  signIn(username: string, password: string) {
    return this.http.post('http://localhost:8080/login', {
      username: username,
      password: password
    }, {
      observe: 'response'
    });
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
