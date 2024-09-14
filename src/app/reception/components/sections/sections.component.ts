import { Component, OnInit } from '@angular/core';
import { ISection } from '../../models/section';
import { ApiService } from '../../../shared/services/api.service';
import { ActivatedRoute } from '@angular/router';
import { UserDataService } from '../../services/user-data.service';

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrl: './sections.component.scss'
})


export class SectionsComponent implements OnInit {

  sections: ISection[] = [];
  patientId: number = 0;


  constructor(private apiService: ApiService , private route: ActivatedRoute,private userDataService: UserDataService) { }

  ngOnInit(): void {
    this.patientId = +this.route.snapshot.paramMap.get('patientId')!;
    this.userDataService.setPatientId(this.patientId); 
    this.getSections();
  }

  private getSections(): void {
    this.apiService.get('Section').subscribe(res => {
      this.sections = res.data;
      this.sections.forEach(section => {
        if (!section.imageId) {
          section.imageId = '../../../../assets/images/default-placeholder.png';  
        } else {
          this.getImageUrl(section.imageId, section);
        }
      });
    }, error => {
      console.error('Error sections:', error);
    });
  }

  trackById(index: number, section: ISection): number {
    return section.id;
  }

  private getImageUrl(imageId: string, section: ISection): void {
    this.apiService.getImage(`Files/Download?id=${imageId}`).subscribe(res => {
      const blob = new Blob([res], { type: 'image/jpeg' });
      section.imageId = URL.createObjectURL(blob);
    }, error => {
      console.error('Error image:', error);
    });
  }
}


