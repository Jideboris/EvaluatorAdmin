import { Component, Output, EventEmitter } from '@angular/core';
import { LeftMenu } from '../objects/leftmenu';

@Component({
  selector: 'app-todo-list-header',
  templateUrl: './todo-list-header.component.html',
  styleUrls: ['./todo-list-header.component.css']
})
export class TodoListHeaderComponent {

  newTodo: LeftMenu = new LeftMenu();

  @Output()
  add: EventEmitter<LeftMenu> = new EventEmitter();

  constructor() {
  }

  addTodo() {
    this.add.emit(this.newTodo);
    this.newTodo = new LeftMenu();
  }

}
