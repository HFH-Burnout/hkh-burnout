import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersplashComponent } from './usersplash/usersplash.component';
import { RegistrationComponent } from './registration/registration.component';
import { DailySurveyComponent } from './daily-survey/daily-survey.component';
import { LoginComponent } from './login/login.component';
import { SigninErrorComponent } from './signin-error/signin-error.component'

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: UsersplashComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'daily', component: DailySurveyComponent },
  { path: 'whoops', component: SigninErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
