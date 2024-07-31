import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ApiService } from '../../../shared/services/api.service';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
  })
export class SectionComponent {

  @Input() name!: string;
  @Input() image!: string;
  
  constructor (private apiService: ApiService){}


  private downloadImage()
  {
    this.apiService.get(`Files/Download?id=${this.image}`).subscribe(res => {});
  }
}
