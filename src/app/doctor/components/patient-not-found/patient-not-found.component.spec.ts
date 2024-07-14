import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientNotFoundComponent } from './patient-not-found.component';

describe('PatientNotFoundComponent', () => {
  let component: PatientNotFoundComponent;
  let fixture: ComponentFixture<PatientNotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PatientNotFoundComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PatientNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
