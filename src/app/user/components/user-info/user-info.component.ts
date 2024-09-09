import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../../shared/services/api.service';
import { IUserInfo } from '../../models/user-info';
import { UserService } from '../../../shared/services/user.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
})
export class UserInfoComponent implements OnInit {
  userInfo: IUserInfo | null = null;
  userImageUrl: string ='../../../../assets/images/young-man-profile-vector-14770074 copy 2 (1).png';  
  isLoadingImage: boolean = true;

  constructor(
    private apiService: ApiService,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.loadUserInfo();
  }

  goToEditPage() {
    if (this.userInfo) {
      this.userService.setUserInfo(this.userInfo);
      this.router.navigate(['/user/userEdit']);
    }
  }

  private loadUserInfo(): void {
    this.apiService.get('User/GetUserInfo').subscribe({
      next: (response) => {
        if (response.isSuccess && response.data) {
          this.userInfo = response.data as IUserInfo;
          if (this.userInfo.image) {
            this.loadUserImage(this.userInfo.image);
          } else {
            this.isLoadingImage = false;
          }
        }
      },
      error: (error) => {
        console.error('Error fetching user info:', error);
        this.isLoadingImage = false;
      },
    });
  }

  private loadUserImage(imageId: string): void {
    this.apiService.getImage(`Files/Download?id=${imageId}`).subscribe({
      next: (res) => {
        const blob = new Blob([res], { type: 'image/jpeg' });
        this.userImageUrl = URL.createObjectURL(blob);
        this.isLoadingImage = false;
      },
      error: (error) => {
        console.error('Error fetching image:', error);
        this.isLoadingImage = false;
      },
    });
  }
}
