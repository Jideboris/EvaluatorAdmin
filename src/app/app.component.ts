import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';
import { LeftMenu } from './objects/leftmenu';
import { Admincontent } from "./objects/admincontent";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService]
})
export class AppComponent implements OnInit {

  menus: LeftMenu[] = [];
  locations: Admincontent[] = [];

  constructor(
    private dataService: DataService
  ) {
  }

  public ngOnInit() {

    
  }

  onAddTodo(todo) {
    this.dataService
      .addTodo(todo)
      .subscribe(
      (newTodo) => {
        this.menus = this.menus.concat(newTodo);
      }
      );
  }

  onToggleTodoComplete(todo) {
    this.dataService
      .toggleTodoComplete(todo)
      .subscribe(
      (updatedTodo) => {
        todo = updatedTodo;
      }
      );
  }

  onRemoveTodo(todo) {
    this.dataService
      .deleteTodoById(todo.id)
      .subscribe(
      (_) => {
        this.menus = this.menus.filter((t) => t.id !== todo.id);
      }
      );
  }
}
