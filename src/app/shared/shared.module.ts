import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './components/calendar/calendar.component';
import { TButtonComponent } from './components/t-button/t-button.component';
import { TInputComponent } from './components/t-input/t-input.component';
import { NgPersianDatepickerModule } from 'ng-persian-datepicker';
import { AlertModelComponent } from './components/alert-model/alert-model.component';
import { TTableComponent } from './components/t-table/t-table.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { BackIconComponent } from './components/back-icon/back-icon.component';
import { LoadingComponent } from './components/loading/loading.component';
import { ErrorFieldComponent } from './components/error-field/error-field.component';
import { ValidationPipe } from './pipes/validation.pipe';
import { TurnBoxComponent } from './components/turn-box/turn-box.component';
import { JalaliDateTimePipe } from './pipes/date-time.pipe';
import { WeekDayPipe } from './pipes/weekday.pipe';
import { TimeInputComponent } from './components/time-input/time-input.component';
import { ModalComponent } from './components/modal/modal.component';
import { TimePipe } from './pipes/time.pipe';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({

  declarations: [
    CalendarComponent,
    TButtonComponent,
    TInputComponent,
    AlertModelComponent,
    TTableComponent,
    BackIconComponent,
    LoadingComponent,
    ErrorFieldComponent,
    ValidationPipe,
    TurnBoxComponent,
    JalaliDateTimePipe,
    WeekDayPipe,
    TimeInputComponent,
    ModalComponent,
    TimePipe,
  ],

  imports: [
    CommonModule,
    FormsModule,
    NgPersianDatepickerModule,
    ReactiveFormsModule,
    HttpClientModule,

  ],

  exports: [
    CalendarComponent,
    TButtonComponent,
    TInputComponent,
    AlertModelComponent,
    TTableComponent,
    HttpClientModule ,
    BackIconComponent,
    LoadingComponent,
    ErrorFieldComponent,
    ValidationPipe,
    TurnBoxComponent,
    JalaliDateTimePipe,
    WeekDayPipe,
    TimeInputComponent,
    ModalComponent,
    TimePipe
  ],
 
})
export class SharedModule { 
  
}
