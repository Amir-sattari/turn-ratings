import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { IActiveDate, IDatepickerTheme } from 'ng-persian-datepicker';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss'
})
export class CalendarComponent {

  
  
  dateValue = new FormControl();
 
  onSelect(event: IActiveDate): void {
    const viaTimestampValue = new Date(event.timestamp);
    const viaGregorianDate = new Date(event.gregorian);
  }
}
