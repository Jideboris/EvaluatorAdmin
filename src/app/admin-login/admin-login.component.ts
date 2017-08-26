import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  @Input()
  email: string
  password: string



  constructor() {

  }

  processSignIn() {
    console.log(this.email)
    console.log(this.password)
  }

}
