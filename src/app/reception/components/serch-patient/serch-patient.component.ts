import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { ApiService } from '../../../shared/services/api.service';
import { IserchInfo } from '../../models/serch';

@Component({
  selector: 'app-serch-patient',
  templateUrl: './serch-patient.component.html',
  styleUrls: ['./serch-patient.component.scss']
})
export class SerchPatientComponent implements OnInit {
  searchControl = new FormControl();
  serchInfo: IserchInfo[] = [];
  noUserFound = false;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.searchControl.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(value => {
        if (value.trim() === '') {
          this.serchInfo = [];
          this.noUserFound = false;
          return of(null);
        }
        return this.apiService.get(`Reception/GetUsers?search=${encodeURIComponent(value)}`).pipe(
          catchError(() => of({ data: [] }))
        );
      })
    ).subscribe({
      next: (response: any) => {
        if (response && response.data) {
          const searchTerm = this.searchControl.value.trim();
          const exactMatches = response.data.filter((user: any) =>
            user.firstName.startsWith(searchTerm)
          );
          const otherMatches = response.data.filter((user: any) =>
            !user.firstName.startsWith(searchTerm)
          );
          this.serchInfo = [...exactMatches, ...otherMatches];
          this.noUserFound = this.serchInfo.length === 0;
        }
      },
      error: (err) => {
        console.error('Error during search', err);
        this.noUserFound = true;
      }
    });
  }
}

