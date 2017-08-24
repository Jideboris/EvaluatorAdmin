import { Injectable } from '@angular/core';
import { LeftMenu } from '../leftmenu';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class ApiMockService {

  constructor(
  ) {
  }

  public getAllTodos(): Observable<LeftMenu[]> {
    return Observable.of([
      new LeftMenu({id: 1, title: 'Read article', complete: false})
    ]);
  }

  public createTodo(leftmenu: LeftMenu): Observable<LeftMenu> {
    return Observable.of(
      new LeftMenu({id: 1, title: 'Read article', complete: false})
    );
  }

  public getTodoById(todoId: number): Observable<LeftMenu> {
    return Observable.of(
      new LeftMenu({id: 1, title: 'Read article', complete: false})
    );
  }

  public updateTodo(leftmenu: LeftMenu): Observable<LeftMenu> {
    return Observable.of(
      new LeftMenu({id: 1, title: 'Read article', complete: false})
    );
  }

  public deleteTodoById(todoId: number): Observable<null> {
    return null;
  }
}
