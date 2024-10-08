import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { ApiService } from '../../../shared/services/api.service';

@Component({
  selector: 'app-my-turns',
  templateUrl: './my-turns.component.html',
  styleUrl: './my-turns.component.scss'
})
export class MyTurnsComponent {

  // searchControl = new FormControl();
  // showFilters: boolean = false;
  // showDateTimeForm: boolean = false;
  // noPatientFound = false;

  // constructor(private apiService: ApiService) {}

  // ngOnInit() {
  //   this.getAllPatients();

  //   this.searchControl.valueChanges.pipe(
  //     debounceTime(300),
  //     distinctUntilChanged(),
  //     switchMap(value => {
  //       if (value.trim() === '') {
  //         this.getAllPatients(); 
  //         return of(null);
  //       }
  //       return this.apiService.get(`Reception/GetUsers?search=${encodeURIComponent(value)}`).pipe(
  //         catchError(() => of({ data: [] }))
  //       );
  //     })
  //   ).subscribe({
  //     next: (response: any) => {
  //       if (response && response.data) {
  //         const searchTerm = this.searchControl.value.trim();
  //         const exactMatches = response.data.filter((patient: any) =>
  //           patient.firstName.startsWith(searchTerm)
  //         );
  //         const otherMatches = response.data.filter((patient: any) =>
  //           !patient.firstName.startsWith(searchTerm)
  //         );
  //         this.patients = [...exactMatches, ...otherMatches];
  //         this.noPatientFound = this.patients.length === 0;
  //       }
  //     },
  //     error: (err) => {
  //       console.error('Error during search', err);
  //       this.noPatientFound = true;
  //     }
  //   });
  // }

  // private getAllPatients() {
  //   this.apiService.get('Reception/GetUsers?search=').pipe(
  //     catchError(() => of({ data: [] }))
  //   ).subscribe({
  //     next: (response: any) => {
  //       if (response && response.data) {
  //         this.patients = response.data;
  //         this.noPatientFound = this.patients.length === 0;
  //       }
  //     },
  //     error: (err) => {
  //       console.error('Error all patients', err);
  //       this.noPatientFound = true;
  //     }
  //   });
  // }

  // public openFilters(): void {
  //   this.showFilters = !this.showFilters;

  //   if (!this.showFilters && this.showDateTimeForm) {
  //     this.showDateTimeForm = false;
  //   }
  // }

  // public openDateTimeForm(): void {
  //   this.showDateTimeForm = !this.showDateTimeForm;
  // }
}

