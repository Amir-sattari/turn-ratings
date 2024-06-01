import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientReferralsComponent } from './patient-referrals.component';

describe('PatientReferralsComponent', () => {
  let component: PatientReferralsComponent;
  let fixture: ComponentFixture<PatientReferralsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PatientReferralsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PatientReferralsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
