import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../shared/services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../../shared/services/user.service';
import { IUser } from '../../models/user';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.scss']
})


export class AddPatientComponent implements OnInit {
  user : IUser [] = [];
  phoneNumber: string = '';
  nationalCode: string = '';
  firstName: string = '';
  lastName: string = '';
  showCalendar: boolean = false;
  showModuleSavePatient: boolean = false;
  showAppointmentButton: boolean = false; 
  showBackHome: boolean = false; 
  showSavePatient: boolean = true; 


  constructor(
    private apiService: ApiService,
    private toastr: ToastrService,
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: any) => {
      this.nationalCode = params['nationalCode'] || ''; 
    });
  }

  onSubmitAndNextStep() {
    const patientData = {
      firstName: this.firstName,
      lastName: this.lastName,
      nationalCode: this.nationalCode,
      phoneNumber: this.phoneNumber
    };
  
    this.apiService.post('Reception/AddUser', patientData).subscribe({
      next: (response) => {
        console.log('Patient added successfully', response);
        if (response.data && response.data.id) {
          const user: IUser = {
            userId: response.data.id,
            firstName: '', 
            lastName: '',
            roles: []
          };
          this.userService.setUser(user);
        }
        this.showAppointmentButton = true; 
        this.showSavePatient = false; 
        this.showBackHome = true; 
        this.toastr.success('بیمار با موفقیت ذخیره شد!', 'موفقیت');
      },
      error: (error) => {
        console.error('There was an error!', error);
        this.toastr.error('ذخیره بیمار با خطا مواجه شد', 'خطا');
      }
    });
  }
  
  
  

  onTakeAppointment() {
    this.router.navigate(['/reception/sections']);
  }

  onBackHome() {
    this.router.navigate(['/reception']);
  }
}
