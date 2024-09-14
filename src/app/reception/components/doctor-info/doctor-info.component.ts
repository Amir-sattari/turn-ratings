import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctor-info',
  templateUrl: './doctor-info.component.html',
  styleUrl: './doctor-info.component.scss'
})
export class DoctorInfoComponent {
  @Input() name!: string;
  @Input() doctorId!: number;

  constructor(private router: Router) {}
}
