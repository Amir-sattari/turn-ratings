import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-doctor-info',
  templateUrl: './doctor-info.component.html',
  styleUrl: './doctor-info.component.scss'
})
export class DoctorInfoComponent {

  @Input() name!: string;
  @Input() expertise!: string;
}
