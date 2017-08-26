import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from "../services/data.service";

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  @Input()
  username: string
  password: string



  constructor(private dataService: DataService) {

  }

  processSignIn() {
    var data = { username: this.username, password: this.password }
    this.dataService
      .loginUserIn(data)
      .subscribe(
      (newTodo) => {
        console.log('here')
      }
      );
  }

}
