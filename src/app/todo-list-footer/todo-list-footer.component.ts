import { Component, Input } from '@angular/core';
import { LeftMenu } from '../leftmenu';

@Component({
  selector: 'app-todo-list-footer',
  templateUrl: './todo-list-footer.component.html',
  styleUrls: ['./todo-list-footer.component.css']
})
export class TodoListFooterComponent {

  @Input()
  menus: LeftMenu[];

  constructor() {
  }

}
