import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './components/calendar/calendar.component';
import { TButtonComponent } from './components/t-button/t-button.component';
import { TInputComponent } from './components/t-input/t-input.component';
import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NgPersianDatepickerModule } from 'ng-persian-datepicker';
import { ReactiveFormsModule } from '@angular/forms';
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
    BackIconComponent,
    LoadingComponent,
    ErrorFieldComponent,
    ValidationPipe,
    TurnBoxComponent,
    JalaliDateTimePipe,
    WeekDayPipe,
  ],

  imports: [
    CommonModule,
    FormsModule,
    NgPersianDatepickerModule,
    ReactiveFormsModule,
    HttpClientModule,
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
    HttpClientModule ,
    BackIconComponent,
    LoadingComponent,
    ErrorFieldComponent,
    ValidationPipe,
    TurnBoxComponent,
    JalaliDateTimePipe,
    WeekDayPipe
  ],
 
})
export class SharedModule { 
  
}
