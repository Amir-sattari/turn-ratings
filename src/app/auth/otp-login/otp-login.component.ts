import { Component , OnInit } from '@angular/core';
import { ApiService } from '../../shared/services/api.service';
import { OtpService } from '../services/otp.service';

@Component({
  selector: 'app-otp-login',
  templateUrl: './otp-login.component.html',
  styleUrl: './otp-login.component.scss'
})
export class OtpLoginComponent {
  phoneNumber: string = ''; 

  constructor (private apiService: ApiService,
    private otpService: OtpService
  ) {}

  public getOtpCode(phoneNumber: string): void
  {
    const mobile: string = phoneNumber;
    
    this.apiService.post('AuthSimple/UserSignUp?phoneNumber=' + mobile, { phoneNumber: mobile })
    .subscribe(res => {
      this.otpService.userPhoneNumber = mobile;      
    });
    
  }
}
