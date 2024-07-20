import { Component, Input } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'app-error-field',
  templateUrl: './error-field.component.html',
  styleUrl: './error-field.component.scss'
})
export class ErrorFieldComponent {
  @Input() control!: FormControl | AbstractControl;
  @Input() errorMessage!: object;
  @Input() styles: string = 'text-red-600';
}
