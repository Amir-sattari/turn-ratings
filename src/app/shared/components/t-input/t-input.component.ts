import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-t-input',
  templateUrl: './t-input.component.html',
  styleUrls: ['./t-input.component.scss']
})
export class TInputComponent {
  @Input() value: string = '';
  @Input() type: string = '';
  @Input() lable: string = '';
  @Input() name: string = '';

  @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();

  onValueChange(event: any) {
    this.value = event.target.value;
    this.valueChange.emit(this.value);
  }
}
