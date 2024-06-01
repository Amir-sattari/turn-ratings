import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-t-input',
  templateUrl: './t-input.component.html',
  styleUrl: './t-input.component.scss'
})
export class TInputComponent {

  @Input() value: string = '';
  @Input() type: string = '';
  @Input() lable: string = '';
  
  phoneNumber: string = ''; 
  username: string = ''; 
  nationalCode: string = ''; 

}