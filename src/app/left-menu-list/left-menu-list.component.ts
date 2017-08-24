import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LeftMenu } from '../leftmenu';

@Component(
  {
    selector: 'app-left-menu-list',
    templateUrl: './left-menu-list.component.html',
    styleUrls: ['./left-menu-list.component.css']
  }
)
export class LeftMenuListComponent {

  @Input()
  menus: LeftMenu[];


  constructor() {
   
  }

}
