import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap, catchError,} from 'rxjs/operators';
import { of } from 'rxjs';
import { ApiService } from '../../../shared/services/api.service';
import { IserchInfo } from '../../models/serch';
import { Router } from '@angular/router';   


@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss'],
})
export class PatientsComponent implements OnInit {
  searchControl = new FormControl();
  patients: IserchInfo[] = [];
  showFilters: boolean = false;
  showDateTimeForm: boolean = false;
  noPatientFound = false;
  noUserFound = false;
  serchInfo: IserchInfo[] = [];

  constructor(private apiService: ApiService , private router: Router) {}

  ngOnInit() {
    this.getAllPatients();

    this.searchControl.valueChanges
      .pipe(
        debounceTime(1),
        distinctUntilChanged(),
        switchMap((value) => {
          const trimmedValue = value.trim();

          if (trimmedValue === '') {
            this.getAllPatients();
            return of([]);
          }

          return this.apiService
            .get(
              `Reception/GetUsers?search=${encodeURIComponent(trimmedValue)}`
            )
            .pipe(catchError(() => of({ data: [] })));
        })
      )
      .subscribe({
        next: (response: any) => {
          if (response && response.data) {
            const searchTerm = this.searchControl.value.trim();
            if (searchTerm === '') {
              this.patients = response.data;
            } else {
              const filteredPatients = response.data.filter(
                (patient: any) =>
                  patient.firstName
                    .toLowerCase()
                    .startsWith(searchTerm.toLowerCase()) ||
                  patient.lastName
                    .toLowerCase()
                    .startsWith(searchTerm.toLowerCase()) ||
                  patient.nationalCode
                    .toLowerCase()
                    .startsWith(searchTerm.toLowerCase()) ||
                  patient.phoneNumber
                    .toLowerCase()
                    .startsWith(searchTerm.toLowerCase())
              );
              this.patients = filteredPatients;
            }
            this.noPatientFound = this.patients.length === 0;
          }
        },
        error: (err) => {
          console.error('Error during search', err);
          this.noPatientFound = true;
        },
      });
  }

  onKeyUp(event: KeyboardEvent): void {
    const inputValue = (event.target as HTMLInputElement).value.trim();

    if (inputValue === '') {
      this.serchInfo = [];
      this.noUserFound = false;
      return;
    }

    this.filterPatients(inputValue);
  }

  private getAllPatients() {
    this.apiService
      .get('Reception/GetUsers?search=')
      .pipe(catchError(() => of({ data: [] })))
      .subscribe({
        next: (response: any) => {
          if (response && response.data) {
            this.patients = response.data;
          }
        },
        error: (err) => {
          console.error('Error during initial load', err);
        },
      });
  }

  private filterPatients(searchTerm: string) {
    const filteredUsers = this.patients.filter(
      (user: any) =>
        user.firstName.startsWith(searchTerm) ||
        user.lastName.startsWith(searchTerm) ||
        user.nationalCode.startsWith(searchTerm) ||
        user.phoneNumber.startsWith(searchTerm)
    );
    this.serchInfo = filteredUsers;
    this.noUserFound = this.serchInfo.length === 0;
  }

  public openFilters(): void {
    this.showFilters = !this.showFilters;

    if (!this.showFilters && this.showDateTimeForm) {
      this.showDateTimeForm = false;
    }
  }

  public openDateTimeForm(): void {
    this.showDateTimeForm = !this.showDateTimeForm;
  }

  public reserveAppointment(patientId: number): void {
    this.router.navigate(['/reception/sections', { patientId }]);
  }
}
