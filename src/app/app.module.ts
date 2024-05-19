import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { ErrorFieldComponent } from './components/error-field/error-field.component';
import { ValidationPipe } from './shared/pipes/validation.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    ErrorFieldComponent,
    ValidationPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
