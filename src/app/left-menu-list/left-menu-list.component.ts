import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LeftMenu } from '../objects/leftmenu';

@Component(
  {
    selector: 'app-left-menu-list',
    templateUrl: './left-menu-list.component.html',
    styleUrls: ['./left-menu-list.component.css']
  }
)
export class LeftMenuListComponent {

  @Input()
  menus: LeftMenu[] = [];


  constructor() {
    this.menus = this.menus.concat({ id: 1, description: 'Locations', active: false });
  }

}
