import { Component } from '@angular/core';

@Component({
  selector: 'app-today-turn',
  templateUrl: './today-turn.component.html',
  styleUrl: './today-turn.component.scss'
})
export class TodayTurnComponent {
  public activeItem: string = 'waiting';

  public setActiveItem(item: string): void
  {
    this.activeItem = item;
  }
}
