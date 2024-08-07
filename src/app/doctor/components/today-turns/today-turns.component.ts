import { Component } from '@angular/core';

@Component({
  selector: 'app-today-turns',
  templateUrl: './today-turns.component.html',
  styleUrl: './today-turns.component.scss'
})
export class TodayTurnsComponent {

  public activeItem: string = 'waiting';

  public setActiveItem(item: string): void
  {
    this.activeItem = item;
  }
}