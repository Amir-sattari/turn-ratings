import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  phoneNumber: string = ''; 
  username: string = ''; 
  ngOnInit(): void {
  }
  isVisible: boolean = false;

  public showPassword()
  {
    this.isVisible = this.isVisible === true ? false : true;
  }
}
