import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../shared/services/api.service';
import { ISection } from '../../models/section';

@Component({
  selector: 'app-services',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.scss']
})
export class SectionsComponent implements OnInit {
  sections: ISection[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.getSections();
  }

  private getSections(): void {
    this.apiService.get('Section').subscribe(res => {
      this.sections = res.data;
      this.sections.forEach(section => {
        if(section.imageId) {
          this.getImageUrl(section.imageId, section);
        }
      });
    });
  }

  trackById(index: number, section: ISection): number {
    return section.id;
  }

  getImageUrl(imageId: string, section: ISection): void {
    this.apiService.getImage(`Files/Download?id=${imageId}`).subscribe(res => {
      const blob = new Blob([res], { type: 'image/jpeg' });
      section.imageId = URL.createObjectURL(blob);
    });
  }
}
