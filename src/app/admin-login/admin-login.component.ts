import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthserviceService } from "../services/authservice.service";
import { Router } from "@angular/router";
@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {

  @Input()
  username: string
  password: string

  constructor(private router: Router, private authservice: AuthserviceService) {

  }

  processSignIn() {
    var data = { username: this.username, password: this.password }
    this.authservice
      .login(data)
      .subscribe(
      (newTodo) => {
        console.log(newTodo)
        this.router.navigate(['/', { outlets: { main: 'location' } }])
      }
      );

   
  }

}
