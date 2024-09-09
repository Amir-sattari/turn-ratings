import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../../../shared/services/api.service';
import { ISection } from '../../../user/models/section';
import { IReceptionInfo } from '../../../user/models/doctor-info';

@Component({
  selector: 'app-edit-reception',
  templateUrl: './edit-reception.component.html',
  styleUrl: './edit-reception.component.scss'
})
export class EditReceptionComponent {
  receptions: IReceptionInfo[] = [];
  loading: boolean = true;
  editForm: FormGroup;
  deleteForm: FormGroup;
  isEditing: boolean = false;
  isDeleting: boolean = false;
  doctorIdToDelete: number | null = null;

  constructor(private apiService: ApiService, private fb: FormBuilder) {
    this.editForm = this.fb.group({
      id: [''],
      firstName: [''],
      lastName: [''],
      phoneNumber: [''],
      nationalCode: [''],
    });
    this.deleteForm = this.fb.group({
      id: [''],
      firstName: [''],
      lastName: [''],
    });
  }

  ngOnInit(): void {
    this.getReception();
  }



  private getReception(): void {
    this.apiService.get('Admin/GetUsers?Roles=3').subscribe({
      next: res => {
        this.receptions = res.data;
        this.receptions.forEach(receptions => {
          if (!receptions.image) {
            receptions.image = '../../../../assets/images/young-man-profile-vector-14770074 copy 2 (1).png';
          } else {
            this.getImageUrl(receptions.image, receptions);
          }
        });
        this.loading = false;  
      },
      error: (error) => {
        console.error('Error loading doctors:', error);
      }
    });
  }

  private getImageUrl(imagePath: string, receptions: IReceptionInfo): void {
    this.apiService.getImage(imagePath).subscribe({
      next: (blob: Blob) => {
        const reader = new FileReader();
        reader.onload = () => {
          receptions.image = reader.result as string;
        };
        reader.readAsDataURL(blob);
      },
      error: (err) => {
        console.error('Error loading image:', err);
      }
    });
  }
  
  editDoctor(id: number): void {
    const doctor = this.receptions.find(doc => doc.id === id);
    if (doctor) {
      this.editForm.patchValue(doctor);
      this.isEditing = true;
    }
  }

  deleteDoctor(id: number): void {
    const doctor = this.receptions.find(doc => doc.id === id);
    if (doctor) {
      this.deleteForm.patchValue(doctor);
      this.isDeleting = true;
      this.doctorIdToDelete = id;
    }
  }

  saveDoctorChanges(): void {
    const editedDoctor = this.editForm.value;
    editedDoctor.sectionId = Number(editedDoctor.sectionId);
    
    this.apiService.post(`Admin/UpdateReception`, editedDoctor).subscribe({
      next: () => {
        this.getReception(); 
        this.isEditing = false;
      },
      error: (error) => {
        console.error('Error updating doctor:', error);
      }
    });
  }
  

  confirmDoctorDelete(): void {
    if (this.doctorIdToDelete) {
      this.apiService.delete(`Admin/DeleteReception/${this.doctorIdToDelete}`).subscribe({
        next: () => {
          this.getReception();
          this.isDeleting = false;
          this.doctorIdToDelete = null;
        },
        error: (error) => {
          console.error('Error deleting doctor:', error);
        }
      });
    }
  }

  closeModal(): void {
    this.isEditing = false;
  }

  closeDeleteModal(): void {
    this.isDeleting = false;
    this.doctorIdToDelete = null;
  }

  trackById(index: number, item: any): number {
    return item.id;
  }
}
