import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from "@angular/http";
import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { environment } from 'environments/environment';

const LOGIN_URL = environment.apiLoginUrl;

@Injectable()
export class AuthserviceService {

  isLoggedIn: boolean = false;
  // store the URL so we can redirect after logging in
  public redirectUrl: string;

  constructor(
    private http: Http,
    private router: Router
  ) { }
  public login(data) {
    let assign = new FormData();
    assign.append('username', data.username);
    assign.append('password', data.password);
    assign.append('category', 'admin');

    let heads = new Headers();
    heads.append('Content-Type', undefined);

    let options = new RequestOptions({ headers: heads });

    return this.http
      .post(LOGIN_URL + '/login', assign, options)
      .map(response => {
        this.isLoggedIn = true;
        if (this.redirectUrl) {
          this.router.navigate([this.redirectUrl]);
          this.redirectUrl = null;
        }
        const login = response.json();
        this.storeData(login)
        return login;
      })
      .catch(this.handleError);
  }

  logout(): void {
    this.isLoggedIn = false;
  }
  private storeData(login) {
    if (login.token) {
      localStorage.setItem('X-Access-Token', login.token);
      localStorage.setItem('X-Key', login.user.username);
      localStorage.setItem('Cat', 'admin');
      localStorage.setItem('Content-Type', 'application/json');
      localStorage.setItem('isloggedin', 'true');
    }
  }
  private handleError(error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }
}
