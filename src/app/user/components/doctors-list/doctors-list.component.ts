import { Component, OnInit } from '@angular/core';
import { IDoctorInfo } from '../../../shared/models/doctor-info';
import { ApiService } from '../../../shared/services/api.service';
import { ActivatedRoute } from '@angular/router';
import { ISection } from '../../../shared/models/section';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctors-list.component.html',
  styleUrl: './doctors-list.component.scss'
})
export class DoctorsListComponent implements OnInit {

  doctorInfo: IDoctorInfo[] = [];
  sections: ISection[] = [];
  sectionTitle: string = '';

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {
    this.getDoctorsInfo();
  }

  private getDoctorsInfo(): void
  {
    this.route.params.subscribe(params => {
      let id = params['id'];

      this.apiService.get(`Reception/GetAllProvidersBySectionId/${id}`).subscribe(res => {
        this.doctorInfo = res.data;
      })
    })
  }

  private getSections(): void
  {
    this.route.params.subscribe(params => {
      let id = params['id'];

      this.apiService.get('Section').subscribe(res => {
        this.sections = res.data;

        this.sections.forEach(section => {
          this.sectionTitle = section.title;
        })
      })
    })
  }
}
