import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-time-input',
  templateUrl: './time-input.component.html',
  styleUrls: ['./time-input.component.scss']
})
export class TimeInputComponent {
  hours: string[] = Array.from({ length: 24 }, (_, i) => i.toString().padStart(2, '0'));
  minutes: string[] = Array.from({ length: 12 }, (_, i) => (i * 5).toString().padStart(2, '0'));

  selectedHour: string | null = null;
  selectedMinute: string | null = null;
  selectedTime: string | null = null;
  showTimePicker = false;

  @Output() timeSelected: EventEmitter<string> = new EventEmitter<string>();

  toggleTimePicker() {
    this.showTimePicker = !this.showTimePicker;
  }

  selectHour(hour: string) {
    this.selectedHour = hour;
    this.updateSelectedTime();
  }

  selectMinute(minute: string) {
    this.selectedMinute = minute;
    this.updateSelectedTime();
  }

  updateSelectedTime() {
    if (this.selectedHour !== null && this.selectedMinute !== null) {
      this.selectedTime = `${this.selectedHour}:${this.selectedMinute}`;
      this.showTimePicker = false; 
      this.timeSelected.emit(this.selectedTime);
    }
  }
}