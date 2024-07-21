import { NgModule  } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgPersianDatepickerModule } from 'ng-persian-datepicker';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { RequestInterceptor } from './auth/interceptor/request.interceptor';




// import { CalendarModule } from 'primeng/calendar';
// import { FormsModule } from '@angular/forms';
// import { ButtonModule } from 'primeng/button';




@NgModule({
  declarations: [
    AppComponent,

    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgPersianDatepickerModule,
    ReactiveFormsModule,
    HttpClientModule
    // CalendarModule,     
    // FormsModule,
    // ButtonModule
  ],
  providers: [
    provideClientHydration(),
    { provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true },

  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
