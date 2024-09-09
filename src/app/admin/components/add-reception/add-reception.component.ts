import { Component } from '@angular/core';
import { ISection } from '../../../user/models/section';
import { ApiService } from '../../../shared/services/api.service';

@Component({
  selector: 'app-add-reception',
  templateUrl: './add-reception.component.html',
  styleUrl: './add-reception.component.scss'
})
export class AddReceptionComponent {
  
  sections: ISection[] = [];

  firstName: string = '';
  lastName: string = '';
  nationalCode: string = '';
  phoneNumber: string = '';

  constructor(private apiService: ApiService) {}

  onSubmitAndNextStep() {
    const providerData = {
      firstName: this.firstName,
      lastName: this.lastName,
      nationalCode: this.nationalCode,
      phoneNumber: this.phoneNumber,
    };

    this.apiService.post('Admin/AddReception', providerData).subscribe({
      next: (response) => {
        console.log('Provider added successfully', response);
      },
      error: (error) => {
        console.error('There was an error!', error);
      }
    });
  }
}