import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../shared/services/api.service';
import { OtpService } from '../services/otp.service';
import { IRole } from '../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrl: './otp.component.scss'
})
export class OtpComponent implements OnInit {
  phoneNumber: string = '';
  countdown: number = 50;
  timer: any;

  constructor(
    private apiService: ApiService,
    private otpService: OtpService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.startTimer();
  }

  startTimer(): void {
    this.timer = setInterval(() => {
      if (this.countdown > 0) {
        this.countdown--;
      } else {
        clearInterval(this.timer);
      }
    }, 1000);
  }

  public signUp(code: string): void {
    
    if (!this.otpService.userPhoneNumber && !code) {
      this.showError('اطلاعات را وارد کنید!');
      return;
    }

    const body = {
      phoneNumber: this.otpService.userPhoneNumber,
      code: code
    }

    this.apiService.post('AuthSimple/OtpLogin', body)
      .subscribe(res => {
        if (res.isSuccess && res.data.token) {

          localStorage.setItem('token', res.data.token);
          this.checkRoles(res.data.roles);

        } else {
          this.showError(res.data.message);
        }
      })
  }

  private checkRoles(roles: IRole[]): void {
    roles.forEach((role) => {
      if (role.title == 'Provider') {
        this.router.navigate(['doctor/']);
      }
      if (role.title == 'admin') {
        this.router.navigate(['doctor/']);
      }
      if (role.title == 'Reception') {
        this.router.navigate(['doctor/']);
      }
      if (role.title == 'User') {
        this.router.navigate(['user/']);
      }
    });
  }

  private showError(message: string) {
    // Implement your error handling logic here
    alert(message);
  }
}