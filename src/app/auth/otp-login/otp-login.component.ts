import { Component , OnInit } from '@angular/core';

@Component({
  selector: 'app-otp-login',
  templateUrl: './otp-login.component.html',
  styleUrl: './otp-login.component.scss'
})
export class OtpLoginComponent implements OnInit {
  phoneNumber: string = ''; 
  ngOnInit(): void {
  }

}
