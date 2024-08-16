import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../shared/services/api.service';
import { ISetMyWorkingTimes } from '../../models/myTimeWorking';
import { IWeekDays } from '../../models/week-turn';
import { FormControl, FormGroup, FormArray, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-set-working-time-doctor',
  templateUrl: './set-working-time-doctor.component.html',
  styleUrls: ['./set-working-time-doctor.component.scss']
})
export class SetWorkingTimeDoctorComponent implements OnInit {

  weekDays: IWeekDays[] = [];
  workingTimeForm: FormGroup;

  constructor(
    private apiService: ApiService,
    private toastr: ToastrService
  ) {
    this.workingTimeForm = new FormGroup({
      workingDays: new FormArray([]) 
    });
    this.addWorkingDay(); 
  }

  ngOnInit() {
    this.getWeekDays();
  }

  get workingDays(): FormArray {
    return this.workingTimeForm.get('workingDays') as FormArray;
  }

  addWorkingDay() {
    const dayGroup = new FormGroup({
      selectedDayId: new FormControl(null, Validators.required),
      timeFrom: new FormControl('', Validators.required),
      timeTo: new FormControl('', Validators.required),
      selectedDate: new FormControl(null, Validators.required)
    });
    this.workingDays.push(dayGroup);
  }

  removeWorkingDay(index: number) {
    this.workingDays.removeAt(index);
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

  onSelect(event: any, index: number): void {
    if (event && event.gregorian) {
      this.workingDays.at(index).patchValue({ selectedDate: new Date(event.gregorian) });
    } else {
      console.error('Invalid date selected');
      this.toastr.error(' تاریخ نامعتبر انتخاب شده است ', 'خطا');
    }
  }

  onStartTimeSelected(time: string, index: number) {
    this.workingDays.at(index).patchValue({ timeFrom: time });
  }

  onEndTimeSelected(time: string, index: number) {
    this.workingDays.at(index).patchValue({ timeTo: time });
  }

  submitWorkingTimes() {
    if (this.workingTimeForm.valid) {
      const workingTimes: ISetMyWorkingTimes[] = this.workingDays.value.map((day: any) => ({
        dayId: day.selectedDayId,
        timePeriods: [
          {
            timeFrom: `${new Date().toISOString().split('T')[0]}T${day.timeFrom}:00Z`,
            timeTo: `${new Date().toISOString().split('T')[0]}T${day.timeTo}:00Z`
          }
        ]
      }));

      this.apiService.post('Provider/SetProviderWorkingTimes', workingTimes).subscribe(
        (response) => {
          console.log('Working times set successfully:', response);
          this.toastr.success(' تایم کاری شما ثبت گردید ', 'عملیات موفق');
        },
        (error: HttpErrorResponse) => {
          console.error('Error setting working times:', error);
          const errorMessage = error.error?.message || 'An unknown error occurred';
          this.toastr.error(errorMessage, 'Error', { timeOut: 10000 });
          setTimeout(() => {
            this.toastr.clear();
          }, 5000);
        }
      );
    } else {
      console.error('All fields are required');
      this.toastr.warning('لطفا تمامی فیلد ها را پر کنید', 'اخطار');
    }
  }
}
