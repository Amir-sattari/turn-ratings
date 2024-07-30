import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../shared/services/api.service';
import { IMyWorkingTimes, ISetMyWorkingTimes } from '../../models/myTimeWorking';
import { ITimePeriod } from '../../models/myTimeWorking';
import { IWeekDays } from '../../models/week-turn';   

@Component({
  selector: 'app-set-working-time-doctor',
  templateUrl: './set-working-time-doctor.component.html',
  styleUrls: ['./set-working-time-doctor.component.scss']
})
export class SetWorkingTimeDoctorComponent implements OnInit {
  weekDays: IWeekDays[] = [];
  setTime: ITimePeriod[] = [];
  selectedDayId: number | null = null;
  timeFrom: string = '';
  timeTo: string = '';

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.fetchWeekDays();
  }

  fetchWeekDays() {
    this.apiService.get('Week/GetWeekTitle').subscribe(
      (response) => {
        if (response.data) {
          this.weekDays = response.data;
        }
      },
      (error) => {
        console.error('Error fetching week days:', error);
      }
    );
  }

  convertTimeToISO(time: string): string {
    const now = new Date();
    const [hours, minutes] = time.split(':');
    now.setHours(parseInt(hours, 10));
    now.setMinutes(parseInt(minutes, 10));
    now.setSeconds(0, 0);
    return now.toISOString();
  }

  submitWorkingTimes() {
    if (this.selectedDayId !== null && this.timeFrom && this.timeTo) {
      const workingTime: ISetMyWorkingTimes = {
        dayId: this.selectedDayId,
        timePeriods: [
          {
            timeFrom: this.convertTimeToISO(this.timeFrom),
            timeTo: this.convertTimeToISO(this.timeTo)
          }
        ]
      };

      this.apiService.post('Provider/SetProviderWorkingTimes', [workingTime]).subscribe(
        (response) => {
          console.log('Working times set successfully:', response);
        },
        (error) => {
          console.error('Error setting working times:', error);
        }
      );
    } else {
      console.error('All fields are required');
    }
  }
}


// [{dayId: "1", timePeriods: [{timeFrom: "07:42", timeTo: "23:46"}]}]

// [{"dayId": 0,"timePeriods": [{"timeFrom": "2024-07-29T12:02:23.992Z","timeTo": "2024-07-29T12:02:23.993Z"}]}]