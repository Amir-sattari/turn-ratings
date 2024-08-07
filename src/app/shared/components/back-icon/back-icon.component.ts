import { Location } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-back-icon',
  templateUrl: './back-icon.component.html',
  styleUrl: './back-icon.component.scss'
})
export class BackIconComponent {

  constructor(private location: Location) {}

  public back(): void
  {
    this.location.back();
  }
}
