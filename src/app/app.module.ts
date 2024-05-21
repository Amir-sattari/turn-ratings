import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { NgPersianDatepickerModule } from 'ng-persian-datepicker';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { CalendarComponent } from './components/calendar/calendar.component';
@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    CalendarComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgPersianDatepickerModule,
    ReactiveFormsModule,    
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
