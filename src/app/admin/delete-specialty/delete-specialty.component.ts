import { Component, OnInit } from '@angular/core';
import { ISection } from '../../user/models/section';
import { ApiService } from '../../shared/services/api.service';

@Component({
  selector: 'app-delete-specialty',
  templateUrl: './delete-specialty.component.html',
  styleUrls: ['./delete-specialty.component.scss']
})
export class DeleteSpecialtyComponent implements OnInit {
  
  sections: ISection[] = [];
  loading: boolean = true;  

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getSections();
  }

  private getSections(): void {
    this.apiService.get('Section').subscribe({
      next: res => {
        this.sections = res.data;
        this.sections.forEach(section => {
          if (!section.imageId) {
            section.imageId = '../../../../assets/images/young-man-profile-vector-14770074 copy 2 (1).png';
          } else {
            this.getImageUrl(section.imageId, section);
          }
        });
        this.loading = false;  
      },
      error: (error) => {
        this.loading = false; 
        console.error('Error loading sections:', error);
      }
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

  deleteSection(sectionId: number): void {
    const confirmDelete = confirm('آیا از حذف این تخصص مطمئن هستید؟');
    if (confirmDelete) {
      this.apiService.delete(`Section/DeleteSection/${sectionId}`).subscribe({
        next: () => {
          this.sections = this.sections.filter(section => section.id !== sectionId);
          alert('تخصص با موفقیت حذف شد.');
        },
        error: (error) => {
          console.error('Error deleting section:', error);
          alert('خطایی در حذف تخصص رخ داد.');
        }
      });
    }
  }
}