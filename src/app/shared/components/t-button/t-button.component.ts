import { Component , Input } from '@angular/core';

@Component({
  selector: 'app-t-button',
  templateUrl: './t-button.component.html',
  styleUrl: './t-button.component.scss'
})
export class TButtonComponent {

  @Input() label: string = 'label';
  @Input() type: string = 'text';
  @Input() disabled: boolean = false;

  

}
