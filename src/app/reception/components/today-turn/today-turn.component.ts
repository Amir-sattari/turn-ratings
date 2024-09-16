import { Component, ViewChild } from '@angular/core';
import { TableTodayTurnsComponent } from '../table-today-turns/table-today-turns.component'; 
@Component({
  selector: 'app-today-turn',
  templateUrl: './today-turn.component.html',
  styleUrl: './today-turn.component.scss'
})
export class TodayTurnComponent {
  public activeItem: string = 'active';

  @ViewChild('appTableTodayTurns') tableTodayTurnsComponent!: TableTodayTurnsComponent;

  public setActiveItem(item: string): void {
    this.activeItem = item;
    this.loadTurnsBasedOnStatus();
  }

  private loadTurnsBasedOnStatus(): void {
    let status: number | null = null;

    if (this.activeItem === 'active') {
      status = 0;  
    } else if (this.activeItem === 'visited') {
      status = 3;  
    } else if (this.activeItem === 'Canceled') {
      status = 1;    
    }

    if (status !== null) {
      this.tableTodayTurnsComponent.currentStatus = status;
      this.tableTodayTurnsComponent.getTurns(status);
    }
  }
}