import { Component } from '@angular/core';
import { ApiService } from '../../../shared/services/api.service';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrl: './add-patient.component.scss'
})
export class AddPatientComponent {

  phoneNumber: string = '';
  nationalCode: string = '';
  firstName: string = '';
  lastName: string = '';
  showCalendar: boolean = false;
  showModuleSavePatient: boolean = false;

  constructor(private apiService: ApiService) {}

  onNextStep1() {
    this.showCalendar = true;
  }

  onNextStep2() {
    this.showModuleSavePatient = true;
  }

  onSubmitAndNextStep() {
    const patientData = {
      firstName: this.firstName,
      lastName: this.lastName,
      nationalCode: this.nationalCode,
      phoneNumber: this.phoneNumber
    };

    this.apiService.post('Reception/AddUser', patientData).subscribe({
      next: (response) => {
        console.log('Patient added successfully', response);
        this.onNextStep1();
      },
      error: (error) => {
        console.error('There was an error!', error);
      }
    });
  }
}
