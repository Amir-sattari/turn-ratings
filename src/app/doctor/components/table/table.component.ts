import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
  @Input() showTurnButtons: boolean = false;
  rowStatus!: 'accepted' | 'rejected';

  count = [
    { id: 1, name: 'امیر حسین', date: '12 بهمن 1403', time: '18:00', isAccepted: false, isRejected: false },
    { id: 2, name: 'رادمان', date: '12 بهمن 1403', time: '18:00', isAccepted: false, isRejected: false },
    { id: 3, name: 'یاسین', date: '12 بهمن 1403', time: '18:00', isAccepted: false, isRejected: false },
    { id: 4, name: 'احمدرضا', date: '12 بهمن 1403', time: '18:00', isAccepted: false, isRejected: false },
    { id: 5, name: 'محمد', date: '12 بهمن 1403', time: '18:00', isAccepted: false, isRejected: false },
    { id: 6, name: 'علی', date: '12 بهمن 1403', time: '18:00', isAccepted: false, isRejected: false },
    { id: 7, name: 'امیر', date: '12 بهمن 1403', time: '18:00', isAccepted: false, isRejected: false },
    { id: 8, name: 'پویا', date: '12 بهمن 1403', time: '18:00', isAccepted: false, isRejected: false },
    { id: 9, name: 'سعید', date: '12 بهمن 1403', time: '18:00', isAccepted: false, isRejected: false },
    { id: 10, name: 'اکبر', date: '12 بهمن 1403', time: '18:00', isAccepted: false, isRejected: false },
  ];

  public accepted(row: any, selectedRowId: number): void {
    
    let rowIndex = this.count.findIndex(x => x.id == selectedRowId);
    this.count.splice(rowIndex, 1);
    this.count.push(row);
    row.isAccepted = true;
  }

  public rejected(row: any, selectedRowId: number): void {

    let rowIndex = this.count.findIndex(x => x.id == selectedRowId);
    this.count.splice(rowIndex, 1);
    this.count.push(row);
    row.isRejected = true;
  }


}
