import { Injectable } from '@angular/core';
import { LeftMenu } from '../objects/leftmenu';
import { ApiService } from './api.service';
import { Observable } from 'rxjs/Observable';
import { Admincontent } from "../objects/admincontent";

@Injectable()
export class DataService {

  constructor(
    private api: ApiService
  ) {
  }

  // Simulate POST /todos
  addTodo(todo: LeftMenu): Observable<LeftMenu> {
    return this.api.createTodo(todo);
  }

  // Simulate DELETE /todos/:id
  deleteTodoById(todoId: number): Observable<LeftMenu> {
    return this.api.deleteTodoById(todoId);
  }

  // Simulate PUT /todos/:id
  updateTodo(todo: LeftMenu): Observable<LeftMenu> {
    return this.api.updateTodo(todo);
  }
  //login in administrator
  loginUserIn(data: object) {
    return this.api.loginUserIn(data);
  }
  // Simulate GET /todos
  getAllLocations(): Observable<Admincontent[]> {
    return this.api.getAllLocations();
  }

  // Simulate GET /todos/:id
  getTodoById(todoId: number): Observable<LeftMenu> {
    return this.api.getTodoById(todoId);
  }

  // Toggle complete
  toggleTodoComplete(todo: LeftMenu) {
    todo.active = !todo.active;
    return this.api.updateTodo(todo);
  }

}
