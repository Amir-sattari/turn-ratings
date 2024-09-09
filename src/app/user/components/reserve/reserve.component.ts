import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ApiService } from '../../../shared/services/api.service';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { ReservationService } from '../../../shared/services/reservation.service';

@Component({
  selector: 'app-reserve',
  templateUrl: './reserve.component.html',
  styleUrls: ['./reserve.component.scss'],
})
export class ReserveComponent implements OnInit {
  providerId: number = 0;
  dateFrom: string | null = null;
  dateTo: string | null = null;
  availableTurns: any[] = [];
  selectedTurns: any[] = [];

  offset: number = 0;
  limit: number = 10;
  isNoMoreTurns: boolean = false; 

  constructor(
    private apiService: ApiService,
    private reservationService: ReservationService,
    private toastr: ToastrService,
    private router: Router,
    private route: ActivatedRoute,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.providerId = +params['providerId'];
    });

    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        document
          .getElementById('scrollarea')!
          .addEventListener('scroll', this.onScroll.bind(this));
      }, 20);
    }
  }

  ngOnDestroy(): void {
    if (isPlatformBrowser(this.platformId)) {
      document
        .getElementById('scrollarea')!
        .removeEventListener('scroll', this.onScroll.bind(this));
    }
  }

  onDateFromSelected(event: any): void {
    this.dateFrom = event;
  }

  onDateToSelected(event: any): void {
    this.dateTo = event;
  }

  onNextStep2(): void {
    if (!this.dateFrom || !this.dateTo) {
      this.toastr.error('لطفا تاریخ شروع و پایان را انتخاب کنید');
      return;
    }

    this.resetPagination();
    this.getAvailableTurns();
  }

  private resetPagination(): void {
    this.offset = 0;
    this.availableTurns = [];
    this.isNoMoreTurns = false; 
  }

  private getAvailableTurns(): void {
    if (this.isNoMoreTurns) {
      return; 
    }

    if (!this.dateFrom || !this.dateTo || !this.providerId) {
      console.error('تاریخ شروع یا پایان و یا دکتر ست نشده');
      return;
    }

    const requestPayload = {
      offset: this.offset,
      limit: this.limit,
      providerId: this.providerId,
      dateFrom: this.dateFrom,
      dateTo: this.dateTo,
    };

    this.apiService
      .post('Reserver/GetProviderTurnInSpecificPeriod', requestPayload)
      .subscribe({
        next: (response) => {
          const newTurns = response.data;

          if (newTurns.length === 0 && !this.isNoMoreTurns) {
            this.toastr.warning('اتمام تایم ها برای تاریخ مد نظر');
            this.isNoMoreTurns = true; 
          } else {
            this.availableTurns = [...this.availableTurns, ...newTurns];

            if (isPlatformBrowser(this.platformId)) {
              setTimeout(() => {
                document
                  .getElementById('scrollarea')!
                  .addEventListener('scroll', this.onScroll.bind(this));
              }, 20);
            }
          }
        },
        error: (error) => {
          this.toastr.error('خطا در دریافت نوبت‌ها. لطفا دوباره تلاش کنید.');
        },
      });
  }

  selectTurn(turn: any): void {
    this.reservationService.setSelectedTurn(turn);
    this.router.navigate(['/user/finalize-reservation', turn.id]);
  }

  private onScroll(): void {
    const element = document.getElementById('scrollarea')!;
    let lastScrollTop = 0;

    if (this.isNoMoreTurns) {
      return; 
    }

    if (element.scrollTop < lastScrollTop) {
      return;
    } else {
      lastScrollTop = element.scrollTop <= 0 ? 0 : element.scrollTop;

      if (element.scrollTop + element.offsetHeight >= element.scrollHeight) {
        console.log('End of scroll reached');
        this.offset += this.limit;
        this.getAvailableTurns();
      }
    }
  }
}
