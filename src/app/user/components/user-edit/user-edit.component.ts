import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUserInfo } from '../../models/user-info';
import { ApiService } from '../../../shared/services/api.service';
import { UserService } from '../../../shared/services/user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss'],
})
export class UserEditComponent implements OnInit {
  userInfo: IUserInfo | null = null;

  constructor(
    private router: Router,
    private apiService: ApiService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.userInfo = this.userService.getUserInfo();
    if (!this.userInfo) {
      console.error('User info not found in service');
      this.router.navigate(['/error']);
    }
  }

  saveChanges() {
    if (this.userInfo) {
      const updatedInfo = {
        firstName: this.userInfo.firstName,
        lastName: this.userInfo.lastName,
        nationalCode: this.userInfo.nationalCode,
        ibanNumber: this.userInfo.ibanNumber,
        bankCardNumber: this.userInfo.bankCardNumber,
      };

      this.apiService.put('User/UpdateInfo', updatedInfo).subscribe({
        next: (response) => {
          console.log('User info updated successfully:', response);
          this.router.navigate(['/user/userInfo'])
        },
        error: (error) => {
          console.error('Error updating user info:', error);
        },
      });
    }
  }
}
