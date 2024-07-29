import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../shared/services/api.service';
import { ISection } from '../../../shared/models/section';

@Component({
  selector: 'app-services',
  templateUrl: './sections.component.html',
  styleUrl: './sections.component.scss'
})
export class SectionsComponent implements OnInit {

  sections: ISection[] = [];

  constructor (private apiService: ApiService){}

  ngOnInit(): void {
    this.getSections();
  }

  private getSections(): void
  {
    this.apiService.get('Section').subscribe(res => {
      this.sections = res.data;
    })
  }
}
