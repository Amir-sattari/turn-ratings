import { Component, EventEmitter, Output  } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss'
})
export class CalendarComponent {

  products : any;
  dateValue = new FormControl();

  @Output() selectedDate = new EventEmitter()
  onDateSelect(event: any): void {
    // const activeDate: IActiveDate = event.detail;
    this.dateValue.setValue(event.shamsi);
    this.selectedDate.emit(event.gregorian)
  }
  
  
}