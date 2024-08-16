import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../shared/services/api.service';
import { ToastrService } from 'ngx-toastr';

export interface ITimePeriod {
  id: number;
  timeFrom: string;
  timeTo: string;
}

export interface IWeekDay {
  id: number;
  dayId: number;
  dayTitle: string;
  timePeriods: ITimePeriod[];
}

@Component({
  selector: 'app-set-turns',
  templateUrl: './set-turns.component.html',
  styleUrls: ['./set-turns.component.scss'],
})
export class SetTurnsComponent implements OnInit {

  weekDays: IWeekDay[] = [];
  selectedDay: IWeekDay | null = null;
  selectedTimePeriodId: number | null = null;
  dateFrom: string | null = null;
  dateTo: string | null = null;
  count: number = 0;
  mins: number = 0;
  timePeriods: ITimePeriod[] = [];

  constructor(private apiService: ApiService , private toastr: ToastrService) { }

  ngOnInit() {
    this.getWeekDays();
  }

  getWeekDays() {
    this.apiService.get('Week/GetWeekTitle').subscribe({
      next: (response) => {
        if (response.data) {
          this.weekDays = response.data;
        }
      },
      error: (error) => {
        console.error('Error fetching week days:', error);
      },
      complete: () => {
        console.log('Request complete');
      }
    });
  }

  onDaySelect(day: IWeekDay) {
    this.selectedDay = day;
    this.selectedTimePeriodId = null;
    this.getTimePeriodsForDay(day.id);
  }

  getTimePeriodsForDay(dayId: number) {
    this.apiService.get(`Provider/GetMyWorkingTimePlan`).subscribe({
      next: (response) => {
        const selectedDayPlan = response.data.find((d: IWeekDay) => d.dayId === dayId);
        if (selectedDayPlan) {
          this.timePeriods = selectedDayPlan.timePeriods;
        }
      },
      error: (error) => {
        console.error('Error fetching time periods:', error);
        this.toastr.error('Failed to fetch time periods');
      }
    });
  }

  createTurn() {
    const turnBody = {
      workingTimeId: this.selectedDay?.id,     
      workingTimeHoursId: Number(this.selectedTimePeriodId), 
      dateFrom: this.dateFrom,
      dateTo: this.dateTo,
      count: Number(this.count), 
      mins: Number(this.mins) 
    };
  
    this.apiService.post('Provider/ProviderGenerateTurns', turnBody).subscribe({
      next: (response) => {
        this.toastr.success('تولید نوبت موفقیت آمیز بود');
      },
      error: (error) => {
        console.error('Error creating turn:', error);
        this.toastr.error('خطا در تولید نوبت / دوباره تلاش کنید');
      }
    });
  }
  
}
