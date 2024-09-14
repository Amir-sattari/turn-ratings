import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';  
import { ToastrService } from 'ngx-toastr';
import { ReservationService } from '../../../shared/services/reservation.service';
import { ApiService } from '../../../shared/services/api.service';
import { UserService } from '../../../shared/services/user.service';
import { UserDataService } from '../../services/user-data.service';

@Component({
  selector: 'app-fainalize-reservation',
  templateUrl: './fainalize-reservation.component.html',
  styleUrls: ['./fainalize-reservation.component.scss']
})
export class FainalizeReservationComponent implements OnInit {
  selectedTurn: any;
  depositAmount: string = '';
  reserveAmount: string = '';
  patientId: number = 0;

  constructor(
    private toastr: ToastrService,
    private router: Router,
    private route: ActivatedRoute,  
    private reservationService: ReservationService,
    private apiService: ApiService,
    private userService: UserService,
    private userDataService: UserDataService 
    ) {}

  ngOnInit(): void {
    this.selectedTurn = this.reservationService.getSelectedTurn();
    this.patientId = this.userDataService.getPatientId(); 
    
    if (!this.selectedTurn) {
      this.toastr.error('لطفا یک نوبت انتخاب کنید');
      this.router.navigate(['/reception/reserve']);
      return; 
        }


    if (!this.patientId) {
      this.toastr.error('اطلاعات بیمار موجود نیست');
      this.router.navigate(['/auth/login']);
    }

  }

  reserveTurn(): void {
    if (!this.depositAmount || !this.reserveAmount) {
      this.toastr.error('لطفا تمامی فیلدها را پر کنید');
      return;
    }

    const requestPayload = {
      turnId: this.selectedTurn.id,
      userId: this.patientId,  
      depositAmount: this.depositAmount,
      reserveAmount: this.reserveAmount
    };

    this.apiService.post('Reception/ReserveTurnForUser', requestPayload).subscribe({
      next: () => {
        this.toastr.success('رزرو با موفقیت انجام شد');
        this.router.navigate(['/reception']);
      },
      error: () => {
        this.toastr.error('خطا در نهایی کردن رزرو');
      }
    });
  }
}
