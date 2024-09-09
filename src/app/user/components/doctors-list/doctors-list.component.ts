import { Component, OnInit } from '@angular/core';
import { IDoctorInfo } from '../../models/doctor-info';
import { ApiService } from '../../../shared/services/api.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctors-list.component.html',
  styleUrls: ['./doctors-list.component.scss']
})
export class DoctorsListComponent implements OnInit {
  doctorInfo: IDoctorInfo[] = [];
  sectionTitle: string = '';

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private toastr: ToastrService
  ){}

  ngOnInit(): void {
    this.getDoctorsInfo();
  }

  private getDoctorsInfo(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.apiService.get(`Reserver/GetAllProvidersBySectionId/${id}`).subscribe(res => {
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
}
