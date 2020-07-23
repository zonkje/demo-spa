import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../shared/user.model';
import {Subject} from 'rxjs';
import {log} from 'util';
import {tap} from 'rxjs/operators';

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
    }).pipe(
      tap(
        responseData => {
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

  private getUserById(id: string){
    this.http.get<User>("http://localhost:8080/user/"+id, {
      headers: new HttpHeaders({'Authorization': 'Bearer eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJrb3Rla2tvdGVra290ZWsxIiwiYXV0aG9yaXRpZXMiOlt7ImF1dGhvcml0eSI6ImZpeHR1cmU6cmVhZCJ9LHsiYXV0aG9yaXR5IjoicG9zdDp3cml0ZSJ9LHsiYXV0aG9yaXR5IjoiUk9MRV9VU0VSIn0seyJhdXRob3JpdHkiOiJwb3N0OnJlYWQifV0sImlhdCI6MTU5NDkzNzYwOCwiZXhwIjoxNTk2NjY0ODAwfQ.hpdPxcYyBmA5mfmm85AMttcXSfPhX1g0VV0wiOrPYpGGBvyXQPHD-y4-mxRxD1YR'})
    }).subscribe( user => {
      console.log(user);
      const loggedUser = new User(user.id, user.firstName, user.lastName, user.email)
      console.log("after User constructor");
      console.log(loggedUser);
      this.user.next(loggedUser);
    })
  }

}
