import { Component, Input, OnInit, ChangeDetectorRef} from '@angular/core';
import { ApiService } from '../../../shared/services/api.service';
import { ITodayTurns } from '../../models/user';

@Component({
  selector: 'app-table-today-turns',
  templateUrl: './table-today-turns.component.html',
  styleUrls: ['./table-today-turns.component.scss']
})
export class TableTodayTurnsComponent implements OnInit {
  
  @Input() showTurnButtons: boolean = true;
  @Input() currentStatus: number = 0;    
  ITodayTurns: ITodayTurns[] = [];
  isLoading: boolean = false;

  constructor(private apiService: ApiService, private cdRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.getTurns(this.currentStatus);
  }

  public getTurns(status: number): void {
    this.isLoading = true;

    if (status === 1 || status === 2) {
      this.getMultipleStatusTurns([1, 2]);
    } else {
      this.apiService.get(`Turn/GetTodayTurns?turnStatus=${status}`).subscribe(response => {
        this.ITodayTurns = response.data;
        this.isLoading = false;
        this.cdRef.detectChanges();
      });
    }
  }

  private getMultipleStatusTurns(statuses: number[]): void {
    const turnsList: ITodayTurns[] = [];

    statuses.forEach((status, index) => {
      this.apiService.get(`Turn/GetTodayTurns?turnStatus=${status}`).subscribe(response => {
        turnsList.push(...response.data);

        if (index === statuses.length - 1) {
          this.ITodayTurns = turnsList;
          this.isLoading = false;
          this.cdRef.detectChanges();
        }
      });
    });
  }

  public visited(row: ITodayTurns, selectedRowId: number): void {
    this.apiService.post(`Reception/AcceptTurnForUser/${selectedRowId}`, {}).subscribe(() => {
      this.removeTurnFromList(selectedRowId);
    });
  }

  public Canceled(row: ITodayTurns, selectedRowId: number): void {
    this.apiService.post(`Reception/CancelTurnForUser/${selectedRowId}`, {}).subscribe(() => {
      this.removeTurnFromList(selectedRowId);
    });
  }

  private removeTurnFromList(turnId: number): void {
    this.ITodayTurns = this.ITodayTurns.filter(turn => turn.turnId !== turnId);
    this.cdRef.detectChanges();
  }
}