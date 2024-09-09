import { Component } from '@angular/core';
import { ApiService } from '../../../shared/services/api.service';

@Component({
  selector: 'app-add-specialty',
  templateUrl: './add-specialty.component.html',
  styleUrls: ['./add-specialty.component.scss']
})
export class AddSpecialtyComponent {

  loading: boolean = false;
  title: string = '';
  selectedFile: File | null = null;
  imageUrl: string | null = null;
  imageId: string | null = null;

  constructor(private apiService: ApiService) {}

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    this.uploadFile();
  }

  uploadFile() {
    if (this.selectedFile) {
      this.loading = true;
      const formData = new FormData();
      formData.append('file', this.selectedFile);

      this.apiService.uploadImage(formData).subscribe({
        next: (response: any) => {
          if (response.data && response.data.imageId) {
            this.imageId = response.data.imageId;
            this.displayImage();
          } else {
            this.loading = false;
            console.error('Unexpected response structure', response);
          }
        },
        error: (error) => {
          this.loading = false;
          console.error('Error uploading file', error);
        }
      });
    }
  }

  displayImage() {
    if (this.imageId) {
      this.apiService.getImage(`Files/Download?id=${this.imageId}`).subscribe(res => {
        const blob = new Blob([res], { type: 'image/jpeg' });
        this.imageUrl = URL.createObjectURL(blob);
        this.loading = false;
      });
       (error: any) => {
        this.loading = false; 
        console.error('Error loading image', error);
      }
    }
  }

  onSubmitAndNextStep() {
    if (!this.title || !this.imageId) {
      alert('Title and image must be provided');
      return;
    }

    const providerData = {
      title: this.title,
      imageId: this.imageId
    };

    this.apiService.post('Section/AddSection', providerData).subscribe({
      next: (response) => {
        console.log('Provider added successfully', response);
      },
      error: (error) => {
        console.error('There was an error!', error);
      }
    });
  }
}