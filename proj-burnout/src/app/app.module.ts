import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UsersplashComponent } from './usersplash/usersplash.component';
import { RegistrationComponent } from './registration/registration.component';

import { TypeFormService } from '../services/typeform.service';
import { HttpClientModule }from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsersplashComponent,
    RegistrationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    TypeFormService,
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
