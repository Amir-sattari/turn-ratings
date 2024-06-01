import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './components/calendar/calendar.component';
import { TButtonComponent } from './components/t-button/t-button.component';
import { TInputComponent } from './components/t-input/t-input.component';
import { FormsModule } from '@angular/forms';


// import { CalendarModule } from 'primeng/calendar';
// import { FormsModule } from '@angular/forms';
// import { ButtonModule } from 'primeng/button';


@NgModule({

  declarations: [
    CalendarComponent,
    TButtonComponent,
    TInputComponent
  ],

  imports: [
    CommonModule,
    FormsModule,
    // CalendarModule,     
    // FormsModule,
    // ButtonModule
  ],

  exports: [
    // FormsModule,
    CalendarComponent,
    TButtonComponent,
    TInputComponent
  ]
})
export class SharedModule { }
