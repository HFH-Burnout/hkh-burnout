import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UsersplashComponent } from './usersplash/usersplash.component';
import { RegistrationComponent } from './registration/registration.component';
import { DailySurveyComponent } from './daily-survey/daily-survey.component';

import { TypeFormService } from '../services/typeform.service';
import { HttpClientModule }from '@angular/common/http';
import { SigninErrorComponent } from './signin-error/signin-error.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsersplashComponent,
    RegistrationComponent,
    DailySurveyComponent,
    SigninErrorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    TypeFormService,
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
