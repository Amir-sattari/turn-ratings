import { Component, OnInit } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { ApiService } from '../../../shared/services/api.service';
import { Router } from '@angular/router';
// import { IserchInfo } from '../../models/serch';



@Component({
  selector: 'app-serch-patient',
  templateUrl: './serch-patient.component.html',
  styleUrls: ['./serch-patient.component.scss']
})
export class SerchPatientComponent implements OnInit {

  nationalCode: string = ''; 
  noUserFound = false;

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit() {}

  onSearch(): void {
    const inputValue = this.nationalCode.trim();

    if (inputValue === '') {
      this.noUserFound = false;
      return;
    }

    this.apiService.get(`Reception/GetUsers?search=${encodeURIComponent(inputValue)}`).pipe(
      catchError(() => of({ data: [] })) 
    ).subscribe({
      next: (response: any) => {
        if (response && response.data && response.data.length > 0) {
          this.router.navigate(['/reception/patient']);
        } else {
          this.router.navigate(['/reception/AddPatient'], { queryParams: { nationalCode: inputValue } });
        }
      },
      error: (err) => {
        console.error('Error during search', err);
        this.noUserFound = true;
      }
    });
  }

  onKeyUp(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      this.onSearch();
    }
  }
}