import { Component } from '@angular/core';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrl: './patients.component.scss'
})
export class PatientsComponent {

  showFilters: boolean = false;
  showDateTimeForm: boolean = false;

  public openFilters(): void
  {
    if(!this.showFilters)
      this.showDateTimeForm = false;
    
    this.showFilters = this.showFilters ? false : true;
  }

  public openDateTimeForm(): void
  {
    this.showDateTimeForm = this.showDateTimeForm ? false : true;
  }
}
