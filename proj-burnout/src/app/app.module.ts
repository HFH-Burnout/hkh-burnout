import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UsersplashComponent } from './usersplash/usersplash.component';
import { SigninErrorComponent } from './signin-error/signin-error.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsersplashComponent,
    SigninErrorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
