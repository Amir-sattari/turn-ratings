import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../../shared/services/api.service';
import { ISection } from '../../user/models/section';

@Component({
  selector: 'app-edit-specialty',
  templateUrl: './edit-specialty.component.html',
  styleUrls: ['./edit-specialty.component.scss']
})
export class EditSpecialtyComponent implements OnInit {
  
  sections: ISection[] = [];
  loading: boolean = true;
  editForm: FormGroup;
  isEditing: boolean = false;
  selectedFile: File | null = null; 

  constructor(private apiService: ApiService, private fb: FormBuilder) {
    this.editForm = this.fb.group({
      id: [''],
      title: [''],
      imageId: ['']
    });
  }

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

  editSection(sectionId: number): void {
    const section = this.sections.find(s => s.id === sectionId);
    if (section) {
      this.editForm.patchValue({
        id: section.id,
        title: section.title,
        imageId: section.imageId
      });
      this.isEditing = true;
    }
  }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  saveChanges(): void {
    if (this.editForm.valid) {
      if (this.selectedFile) {
        const formData = new FormData();
        formData.append('file', this.selectedFile);

        this.apiService.uploadImage(formData).subscribe({
          next: (response: any) => {
            if (response.data && response.data.imageId) {
              this.editForm.patchValue({ imageId: response.data.imageId });
              this.updateSection();
            } else {
              console.error('Error in uploading image');
            }
          },
          error: (error) => {
            console.error('Error uploading image:', error);
          }
        });
      } else {
        this.updateSection();
      }
    }
  }

  updateSection(): void {
    const formValue = this.editForm.value;
    this.apiService.put('Section/UpdateSection', formValue).subscribe({
      next: (response) => {
        console.log('Section updated successfully', response);
        this.isEditing = false;
        this.getSections(); 
      },
      error: (error) => {
        console.error('Error updating section:', error);
      }
    });
  }

  closeModal(): void {
    this.isEditing = false;
  }
}
