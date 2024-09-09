import { Component, OnInit } from '@angular/core';
import { IMyWorkingTimes } from '../../models/myTimeWorking';
import { ApiService } from '../../../shared/services/api.service';

@Component({
  selector: 'app-working-time-doctor',
  templateUrl: './working-time-doctor.component.html',
  styleUrl: './working-time-doctor.component.scss',
})
export class WorkingTimeDoctorComponent implements OnInit {

  MyWorkingTimes: IMyWorkingTimes[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.getMyworkingTimes();
  }

  getMyworkingTimes() {
    this.apiService.get('Provider/GetMyWorkingTimePlan').subscribe(
      (response) => {
        if (response.data) {
          this.MyWorkingTimes = response.data;
        }
      },
      (error) => {
        console.error('Error week days:', error);
      }
    );
  }
}