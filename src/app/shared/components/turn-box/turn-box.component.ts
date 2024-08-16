import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { ITimeBox } from '../../../doctor/models/time-box';
import { ApiService } from '../../services/api.service';


@Component({
  selector: 'app-turn-box',
  templateUrl: './turn-box.component.html',
  styleUrls: ['./turn-box.component.scss']
})
export class TurnBoxComponent {
  @ViewChild('scrollTarget') scrollTarget!: ElementRef;

  @Output() delete = new EventEmitter()
  @Input() timeBox: ITimeBox = <ITimeBox>{}

  constructor (private apiService: ApiService) {}


  addTimeBox() {
    const body = { }
    this.apiService.post('SetProviderWorkingTimes', body).subscribe(res => {
    })
  }

  removeTimeBox() {
    this.delete.emit(this.timeBox.dayId);


  }
}
