import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { HotToastService } from '@ngneat/hot-toast';
import { ApiService } from '../../../app/shared/services/api.service';
import { IRole } from '../models/user';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  phoneNumber: string = '';
  username: string = '';
  isVisible: boolean = false;
  type: 'text' | 'password' = 'password';
  loading: boolean = false;

  constructor(
    private apiService: ApiService,
    private router: Router,
    private userService: UserService ,
    // private toast: HotToastService
){}

  ngOnInit(): void {}

  showPassword() {
    this.isVisible = !this.isVisible;
    this.type = this.type === 'text' ? 'password' : 'text';
  }

  private showError(message: string) {
    // Implement your error handling logic here
    alert(message);
  }

  login() {
    if (!this.phoneNumber || !this.username) {
      this.showError('اطلاعات را وارد کنید!');
      return;
    }
    const body = {
      username: this.username,
      password: this.phoneNumber,
    };
    this.loading = true;
    this.apiService.post('AuthSimple/Login', body).subscribe({
      next: (res) => {
        this.loading = false;
        if (res.isSuccess && res.data.token) {
          localStorage.setItem('token', res.data.token);
          this.userService.setUser(res.data);  
          this.checkRoles(res.data.roles);
        } else {
          this.showError('نام کاربری یا رمز عبور اشتباه است.');
        }
      },
      error: (e) => {
        this.loading = false;
        this.showError(e?.error?.messageEn || 'خطایی رخ داده است');
      },
    });
  }



  checkRoles(roles: IRole[]) {
    roles.forEach((role) => {
      if (role.title == 'Provider') {
        this.router.navigate(['doctor/']);
      }
      if (role.title == 'Admin') {
        this.router.navigate(['admin/home']);
      }
      if (role.title == 'Reception') {
        this.router.navigate(['reception/']);
      }
      if (role.title == 'User') {
        this.router.navigate(['user/sections']);
      }
      // if (role.title == 'User' , 'Provider' , 'Admin', 'Reception') {
      //   this.router.navigate(['admin/home']);
      // }
    });
  }
}