import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../shared/services/api.service';
import { ToastrService } from 'ngx-toastr';
import { ITimePeriod } from '../../models/myTimeWorking';
import { IWeekDays } from '../../models/week-turn';



@Component({
  selector: 'app-set-turns',
  templateUrl: './set-turns.component.html',
  styleUrls: ['./set-turns.component.scss'],
})

export class SetTurnsComponent implements OnInit {

  weekDays: IWeekDays[] = [];
  selectedDay: IWeekDays | null = null;
  selectedWorkingTimeId: number | null = null;  
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
        console.error('Error  week days:', error);
      },
      complete: () => {
        console.log('Request complete');
      }
    });
  }


  onDaySelect(day: IWeekDays) {
    this.selectedDay = day;
    this.selectedTimePeriodId = null;
    this.getTimePeriodsForDay(day.id);
  }


  getTimePeriodsForDay(dayId: number) {
    this.apiService.get(`Provider/GetMyWorkingTimePlan`).subscribe({
      next: (response) => {
        const selectedDayPlan = response.data.find((d: IWeekDays) => d.dayId === dayId);
        if (selectedDayPlan) {
          this.timePeriods = selectedDayPlan.timePeriods;
          this.selectedWorkingTimeId = selectedDayPlan.id;
        }
      },
      error: (error) => {
        console.error('Error  time periods:', error);
        this.toastr.error('Failed to  time periods');
      }
    });
  }


  createTurn() {
    const turnBody = {
      workingTimeId: this.selectedWorkingTimeId,     
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
        this.toastr.error('روز انتخاب شده جزو روزهای کاری نیست یا در این بازه نوبت تولید کرده اید');
      }
    });
  }
}