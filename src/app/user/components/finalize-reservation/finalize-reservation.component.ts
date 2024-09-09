import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ReservationService } from '../../../shared/services/reservation.service';
import { ApiService } from '../../../shared/services/api.service';

@Component({
  selector: 'app-finalize-reservation',
  templateUrl: './finalize-reservation.component.html',
  styleUrls: ['./finalize-reservation.component.scss']
})
export class FinalizeReservationComponent implements OnInit {
  selectedTurn: any;
  depositAmount: string = '';
  reserveAmount: string = '';
  paymentCode: string = 'dssf65efsff455414$ytde';

  constructor(
    private toastr: ToastrService,
    private router: Router,
    private reservationService: ReservationService,
    private apiService: ApiService,
  ) {}

  ngOnInit(): void {
    this.selectedTurn = this.reservationService.getSelectedTurn();
    
    if (!this.selectedTurn) {
      this.toastr.error('لطفا یک نوبت انتخاب کنید');
      this.router.navigate(['/user/reserve']);
    }
  }

  reserveTurn(): void {
    if (!this.depositAmount || !this.reserveAmount) {
      this.toastr.error('لطفا تمامی فیلدها را پر کنید');
      return;
    }

    this.reservationService.setDepositAmount(this.depositAmount);
    this.reservationService.setReserveAmount(this.reserveAmount);

    const requestPayload = {
      turnId: this.selectedTurn.id,
      depositAmount: this.depositAmount,
      reserveAmount: this.reserveAmount,
      paymentCode: this.paymentCode

    };

    this.apiService.post('Reserver/ReserveTurn', requestPayload).subscribe({
      next: () => {
        this.toastr.success('رزرو با موفقیت انجام شد');
        this.router.navigate(['user/sections']);
      },
      error: () => {
        this.toastr.error('خطا در نهایی کردن رزرو');
      }
    });
  }
}