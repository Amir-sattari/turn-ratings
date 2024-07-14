import { Component } from '@angular/core';
import { ApiService } from '../../../shared/services/api.service';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.scss']
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

    this.apiService.post('v1/Reception/AddUser', patientData).subscribe(
      response => {
        console.log('Patient added successfully', response);
        // پس از موفقیت به مرحله بعدی بروید
        this.onNextStep1();
      },
      error => {
        console.error('There was an error!', error);
        // هر عملی که بعد از خطا باید انجام شود
      }
    );
  }
}
