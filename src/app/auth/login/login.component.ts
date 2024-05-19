import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  phoneNumber: string = ''; 
  username: string = ''; 
  isVisible: boolean = false;
  type: 'text' | 'password' = 'password'
  
  ngOnInit(): void {
  }

  public showPassword()
  {
    this.isVisible = this.isVisible === true ? false : true;
    this.type = this.type == 'text' ? 'password' : 'text';
  }
}
