import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeTurnsComponent } from './free-turns.component';

describe('FreeTurnsComponent', () => {
  let component: FreeTurnsComponent;
  let fixture: ComponentFixture<FreeTurnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FreeTurnsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FreeTurnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
