import { Component, Input, ViewChild, viewChild } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {


  isVisible: boolean = false;
  type: 'text' | 'password' = 'password'

  public showPassword() {
    this.isVisible = this.isVisible === true ? false : true;
    this.type = this.type == 'text' ? 'password' : 'text';
  }
}
