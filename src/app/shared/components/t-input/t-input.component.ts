import { Component, Input } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'app-t-input',
  templateUrl: './t-input.component.html',
  styleUrl: './t-input.component.scss'
})
export class TInputComponent {

  @Input() value: string = '222';
  @Input() type: string = '';
  @Input() lable: string = '';
  @Input() name: string = '';

}