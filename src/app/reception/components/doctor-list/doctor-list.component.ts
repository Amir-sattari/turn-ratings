import { Component, OnInit } from '@angular/core';
import { IDoctorInfo } from '../../models/doctor-info';
import { ApiService } from '../../../shared/services/api.service';
import { UserDataService } from '../../services/user-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.scss']
})
export class DoctorListComponent implements OnInit {
  doctorInfo: IDoctorInfo[] = [];
  sectionTitle: string = '';
  patientId: string = '';

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router,
    private userDataService: UserDataService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.patientId = params['patientId'] || this.userDataService.getPatientId();
      this.getDoctorsInfo();
    });
  }

  private getDoctorsInfo(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.apiService.get(`Reception/GetAllProvidersBySectionId/${id}`).subscribe(res => {
        this.doctorInfo = res.data;
        if (this.doctorInfo.length > 0) {
          this.sectionTitle = this.doctorInfo[0].speciality;
        } else {
          this.toastr.info('هیچ دکتری برای این تخصص یافت نشد');
        }
      }, error => {
        this.toastr.error('خطا در دریافت اطلاعات دکترها');
        console.error('Error doctor info:', error);
      });
    });
  }

  public selectDoctor(doctorId: number): void {
    this.router.navigate(['/reception/reserve', { doctorId, patientId: this.patientId }]);
  }
}
