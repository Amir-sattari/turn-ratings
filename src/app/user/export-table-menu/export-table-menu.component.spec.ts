import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportTableMenuComponent } from './export-table-menu.component';

describe('ExportTableMenuComponent', () => {
  let component: ExportTableMenuComponent;
  let fixture: ComponentFixture<ExportTableMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExportTableMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExportTableMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
