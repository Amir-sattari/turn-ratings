import { Component } from '@angular/core';


@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrl: './add-patient.component.scss'
})
export class AddPatientComponent {

  username: string = '';
  nationalCode: string = '';
  phoneNumber: string = '';
  showCalendar: boolean = false;
  showModuleSavePatient: boolean = false;

  onNextStep1() {
    this.showCalendar = true;
  }

  onNextStep2() {
    this.showModuleSavePatient = true;
  }
}