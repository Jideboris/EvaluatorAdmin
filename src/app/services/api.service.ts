import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Http, Response } from '@angular/http';
import { LeftMenu } from '../objects/leftmenu';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Admincontent } from "../objects/admincontent";
import { Headers, RequestOptions } from '@angular/http';

const API_URL = environment.apiUrl;
const LOGIN_URL = environment.apiLoginUrl;

@Injectable()
export class ApiService {



  constructor(private http: Http) {
  }
  public loginUserIn(data) {
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
        const login = response.json();
        return login;
      })
      .catch(this.handleError);
  }

  public getAllLocations(): Observable<Admincontent[]> {
    return this.http
      .get(API_URL + '/locations')
      .map(response => {
        const locations = response.json();
        console.log(locations)
        return locations.map((location) => new Admincontent());
      })
      .catch(this.handleError);
  }

  public createTodo(todo: LeftMenu): Observable<LeftMenu> {
    return this.http
      .post(API_URL + '/todos', todo)
      .map(response => {
        return new LeftMenu(response.json());
      })
      .catch(this.handleError);
  }

  public getTodoById(todoId: number): Observable<LeftMenu> {
    return this.http
      .get(API_URL + '/todos/' + todoId)
      .map(response => {
        return new LeftMenu(response.json());
      })
      .catch(this.handleError);
  }

  public updateTodo(todo: LeftMenu): Observable<LeftMenu> {
    return this.http
      .put(API_URL + '/todos/' + todo.id, todo)
      .map(response => {
        return new LeftMenu(response.json());
      })
      .catch(this.handleError);
  }

  public deleteTodoById(todoId: number): Observable<null> {
    return this.http
      .delete(API_URL + '/todos/' + todoId)
      .map(response => null)
      .catch(this.handleError);
  }

  private handleError(error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }
  private storedata(token, user, contype) {
    if (token) {
      localStorage.setItem('X-Access-Token', token);
      localStorage.setItem('X-Key', user);
      localStorage.setItem('Cat', 'admin');
      localStorage.setItem('Content-Type', 'application/json');
    }
  }
}
