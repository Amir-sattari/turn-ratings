import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../shared/services/api.service';
import { ISection } from '../../user/models/section';

@Component({
  selector: 'app-add-provider',
  templateUrl: './add-provider.component.html',
  styleUrls: ['./add-provider.component.scss']
})
export class AddProviderComponent implements OnInit {
  
  sections: ISection[] = [];

  firstName: string = '';
  lastName: string = '';
  nationalCode: string = '';
  phoneNumber: string = '';
  selectedSectionId: number = 0;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.getSections();
  }

  private getSections(): void {
    this.apiService.get('Section').subscribe({
      next: (res) => {
        this.sections = res.data;
      },
      error: (error) => {
        console.error('Error fetching sections', error);
      }
    });
  }

  onSubmitAndNextStep() {
    const providerData = {
      firstName: this.firstName,
      lastName: this.lastName,
      nationalCode: this.nationalCode,
      phoneNumber: this.phoneNumber,
      sectionId: this.selectedSectionId
    };

    this.apiService.post('Reception/AddProvider', providerData).subscribe({
      next: (response) => {
        console.log('Provider added successfully', response);
      },
      error: (error) => {
        console.error('There was an error!', error);
      }
    });
  }
}

