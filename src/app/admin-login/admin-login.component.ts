import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthserviceService } from "../services/authservice.service";

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  @Input()
  username: string
  password: string

  constructor(private authservice: AuthserviceService) {

  }

  processSignIn() {
    var data = { username: this.username, password: this.password }
    this.authservice
      .login(data)
      .subscribe(
      (newTodo) => {
        console.log('here')
      }
      );
  }

}
