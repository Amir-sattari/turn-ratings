import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayTurnsComponent } from './today-turns.component';

describe('TodayTurnsComponent', () => {
  let component: TodayTurnsComponent;
  let fixture: ComponentFixture<TodayTurnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodayTurnsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TodayTurnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
