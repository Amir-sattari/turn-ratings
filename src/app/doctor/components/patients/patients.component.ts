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
    this.showFilters = this.showFilters ? false : true;
    
    if(!this.showFilters && this.showDateTimeForm)
      this.showDateTimeForm = false;
  }

  public openDateTimeForm(): void
  {
    this.showDateTimeForm = this.showDateTimeForm ? false : true;
  }
}
