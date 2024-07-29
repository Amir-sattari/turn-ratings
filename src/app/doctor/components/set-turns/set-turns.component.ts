import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../shared/services/api.service';
import { IWeekDays } from '../../models/week-turn';
import { ITimeBox } from '../../models/time-box';

@Component({
  selector: 'app-set-turns',
  templateUrl: './set-turns.component.html',
  styleUrl: './set-turns.component.scss',
})

export class SetTurnsComponent implements OnInit {
  weekDays: IWeekDays[] = [];
  timeBoxes: ITimeBox[] = [{ dayId: 1, timeFrom: '', timeTo: '' }];

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

  onDelete(id: number) {
    const index = this.timeBoxes.findIndex((x) => x.dayId == id);
    if (index > -1) {
      this.timeBoxes.splice(index, 1);
    }
  }

  public addTurn(dayId: number, timeBox: ITimeBox)
  {
    const body = {
      dayId: dayId,
      timePeriods: {
        timeFrom: timeBox.timeFrom,
        timeTo: timeBox.timeTo
      }
    }

    this.apiService.post('setProviderWorkingTimes', body).subscribe(res => {

    })
  }
}

// export interface IWeekDays {
//   dayTitle: string;
//   timeBoxes: Array<{ from: string, to: string, turn: string, duration: string }>;
// }