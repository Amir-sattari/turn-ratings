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
  // @Output() delete = new EventEmitter()
  @Input() timeBox: ITimeBox = <ITimeBox>{}

  constructor (private apiService: ApiService) {}


  addTimeBox() {
    const body = {

    }

    this.apiService.post('SetProviderWorkingTimes', body).subscribe(res => {

    })

    // if (this.timeBoxes.length < 3) {
    //   this.timeBoxes.push({ from: '', to: '', turn: '', duration: '' });

    //   setTimeout(() => {
    //     const element = document.querySelectorAll('.box-time')[this.timeBoxes.length - 1] as HTMLElement;
    //     element.classList.add('fade-enter');
    //   }, 0);

    //   if (this.timeBoxes.length > 1) {
    //     this.scrollTarget.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'end' });
    //   }

    // }
  }

  removeTimeBox() {

    // const element = document.querySelectorAll('.box-time')[index] as HTMLElement;

    // element.classList.add('fade-leave');

    // element.addEventListener('animationend', () => {
    //   // this.timeBoxes.splice(index, 1);
    // }, { once: true });

    this.delete.emit(this.timeBox.dayId);


  }
}
