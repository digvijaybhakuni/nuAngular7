import {Injectable} from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, catchError, switchMap } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class AuthService {

  constructor(private httpClient: HttpClient) {}

  public login(form: LoginForm): Observable<boolean>{
    const username = form.email;
    const password = form.password;
    return this.httpClient.post('/api/auth', {username, password}).pipe(
      switchMap(res => {
        window.sessionStorage.setItem('token', res['token']);
        return of(true);
      }), catchError( err => {
        return of(false);
      })
    );
  }

}

export interface LoginForm {
  email: string;
  password: string;
  rememberBe?: boolean;
}