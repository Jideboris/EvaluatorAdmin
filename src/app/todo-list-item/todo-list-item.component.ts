import { Component, Input, Output, EventEmitter } from '@angular/core';
import { LeftMenu } from '../leftmenu';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css']
})
export class TodoListItemComponent {

  @Input() leftmenu: LeftMenu;

  @Output()
  remove: EventEmitter<LeftMenu> = new EventEmitter();

  @Output()
  toggleComplete: EventEmitter<LeftMenu> = new EventEmitter();

  constructor() {
  }

  toggleTodoComplete(leftmenu: LeftMenu) {
    this.toggleComplete.emit(leftmenu);
  }

  removeTodo(leftmenu: LeftMenu) {
    this.remove.emit(leftmenu);
  }

}
