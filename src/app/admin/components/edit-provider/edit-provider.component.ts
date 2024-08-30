import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../../../shared/services/api.service';
import { ISection } from '../../../user/models/section';
import { IDoctorInfo } from '../../../user/models/doctor-info';

@Component({
  selector: 'app-edit-provider',
  templateUrl: './edit-provider.component.html',
  styleUrl: './edit-provider.component.scss'
})
export class EditProviderComponent implements OnInit {

  sections: ISection[] = [];
  doctors: IDoctorInfo[] = [];
  loading: boolean = true;
  editForm: FormGroup;
  deleteForm: FormGroup;
  isEditing: boolean = false;
  isDeleting: boolean = false;
  selectedFile: File | null = null; 
  doctorIdToDelete: number | null = null;

  constructor(private apiService: ApiService, private fb: FormBuilder) {
    this.editForm = this.fb.group({
      id: [''],
      firstName: [''],
      lastName: [''],
      phoneNumber: [''],
      nationalCode: [''],
      sectionId: [null],  // Ensure this is a number type, not a string
    });
    this.deleteForm = this.fb.group({
      id: [''],
      firstName: [''],
      lastName: [''],
    });
  }

  ngOnInit(): void {
    this.getDoctors();
    this.getSections();
  }

  private getSections(): void {
    this.apiService.get('Section').subscribe({
      next: res => {
        this.sections = res.data;
      },
      error: (error) => {
        console.error('Error loading sections:', error);
      }
    });
  }

  private getDoctors(): void {
    this.apiService.get('Admin/GetUsers?Roles=2').subscribe({
      next: res => {
        this.doctors = res.data;
        this.doctors.forEach(doctor => {
          if (!doctor.image) {
            doctor.image = '../../../../assets/images/young-man-profile-vector-14770074 copy 2 (1).png';
          } else {
            this.getImageUrl(doctor.image, doctor);
          }
        });
        this.loading = false;  
      },
      error: (error) => {
        console.error('Error loading doctors:', error);
      }
    });
  }

  private getImageUrl(imagePath: string, doctor: IDoctorInfo): void {
    this.apiService.getImage(imagePath).subscribe({
      next: (blob: Blob) => {
        const reader = new FileReader();
        reader.onload = () => {
          doctor.image = reader.result as string;
        };
        reader.readAsDataURL(blob);
      },
      error: (err) => {
        console.error('Error loading image:', err);
      }
    });
  }
  
  editDoctor(id: number): void {
    const doctor = this.doctors.find(doc => doc.id === id);
    if (doctor) {
      this.editForm.patchValue(doctor);
      this.isEditing = true;
    }
  }

  deleteDoctor(id: number): void {
    const doctor = this.doctors.find(doc => doc.id === id);
    if (doctor) {
      this.deleteForm.patchValue(doctor);
      this.isDeleting = true;
      this.doctorIdToDelete = id;
    }
  }

  saveDoctorChanges(): void {
    const editedDoctor = this.editForm.value;
    editedDoctor.sectionId = Number(editedDoctor.sectionId);
    
    this.apiService.post(`Admin/UpdateProvider`, editedDoctor).subscribe({
      next: () => {
        this.getDoctors(); 
        this.isEditing = false;
      },
      error: (error) => {
        console.error('Error updating doctor:', error);
      }
    });
  }
  

  confirmDoctorDelete(): void {
    if (this.doctorIdToDelete) {
      this.apiService.delete(`Admin/DeleteProvider/${this.doctorIdToDelete}`).subscribe({
        next: () => {
          this.getDoctors();
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
