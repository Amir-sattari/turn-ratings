import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './components/calendar/calendar.component';
import { TButtonComponent } from './components/t-button/t-button.component';
import { TInputComponent } from './components/t-input/t-input.component';
import { FormsModule } from '@angular/forms';
import { NgPersianDatepickerModule } from 'ng-persian-datepicker';
import { ReactiveFormsModule } from '@angular/forms';
import { AlertModelComponent } from './components/alert-model/alert-model.component';
import { TTableComponent } from './components/t-table/t-table.component';
import { BackIconComponent } from './components/back-icon/back-icon.component';


// import { CalendarModule } from 'primeng/calendar';
// import { FormsModule } from '@angular/forms';
// import { ButtonModule } from 'primeng/button';


@NgModule({

  declarations: [
    CalendarComponent,
    TButtonComponent,
    TInputComponent,
    AlertModelComponent,
    TTableComponent,
    BackIconComponent
  ],

  imports: [
    CommonModule,
    FormsModule,
    NgPersianDatepickerModule,
    ReactiveFormsModule
    // CalendarModule,     
    // FormsModule,
    // ButtonModule
  ],

  exports: [
    // FormsModule,
    CalendarComponent,
    TButtonComponent,
    TInputComponent,
    AlertModelComponent,
    TTableComponent,
    BackIconComponent
  ]
})
export class SharedModule { }
