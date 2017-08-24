import { Component, OnInit } from '@angular/core';
import { TodoDataService } from './services/todo-data.service';
import { LeftMenu } from './leftmenu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TodoDataService]
})
export class AppComponent implements OnInit {

  menus: LeftMenu[] = [];

  constructor(
    private todoDataService: TodoDataService
  ) {
  }

  public ngOnInit() {

    this.menus = this.menus.concat({id:1,description:'Location',active:false});
    console.log(this.menus)
    // this.todoDataService
    //   .getAllTodos()
    //   .subscribe(
    //     (todos) => {
    //       this.menus = todos;
    //     }
    //   );
  }

  onAddTodo(todo) {
    this.todoDataService
      .addTodo(todo)
      .subscribe(
      (newTodo) => {
        this.menus = this.menus.concat(newTodo);
      }
      );
  }

  onToggleTodoComplete(todo) {
    this.todoDataService
      .toggleTodoComplete(todo)
      .subscribe(
      (updatedTodo) => {
        todo = updatedTodo;
      }
      );
  }

  onRemoveTodo(todo) {
    this.todoDataService
      .deleteTodoById(todo.id)
      .subscribe(
      (_) => {
        this.menus = this.menus.filter((t) => t.id !== todo.id);
      }
      );
  }
}
