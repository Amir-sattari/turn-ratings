import { Component, OnInit } from '@angular/core';
import { IUserObj } from '../../models/user';
import { ApiService } from '../../../shared/services/api.service';
import { Router } from '@angular/router';
import { UserDataService } from '../../services/user-data.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {
  userInfo: IUserObj | null = null;
  userImageUrl: string = '../../../../assets/images/young-man-profile-vector-14770074 copy 2 (1).png';  
  isLoadingImage: boolean = true;
  noUserFound = false;

  constructor(
    private apiService: ApiService,
    private router: Router,
    private userDataService: UserDataService
  ) {}

// PatientComponent
ngOnInit() {
  this.userDataService.userInfo$.subscribe(userInfo => {
    if (userInfo) {
      this.userInfo = userInfo;
      this.noUserFound = false;
      if (userInfo.image) {
        this.loadUserImage(userInfo.image);
      } else {
        this.isLoadingImage = false;
      }
    } else {
      this.noUserFound = true;
    }
  });
}


  goToReserveTurn() {
    if (this.userInfo) {
      // Assuming you want to navigate or perform an action
      this.router.navigate(['/reception/sections']);
    }
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
