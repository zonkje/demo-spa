import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) {
  }

  signUp(username: string, password: string) {
    return this.http.post('http://localhost:8080/login', {
      username: username,
      password: password
    },{
      observe: 'response'
    });
  }

}
