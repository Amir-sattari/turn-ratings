import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {

  // @Input() titles: any = ['ردیف','نام و نام خانوادگی','کد ملی','شماره همراه','تاریخ و ساعت مراجعه',]
  // @Input() values: any = ['امیر حسین ستاری','4271637858','09214904528','هر موقع دلم خواست میام',]


  // var a = [
  //   {
  //     id: 1,
  //     name: "amir hossein"
  //   }
  // ]

  public isTodayTurns(): boolean
  {
    if(window.location.href.includes('today-turns'))
      return true;

    return false;
  }
}
