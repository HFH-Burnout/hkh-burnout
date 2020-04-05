import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersplashComponent } from './usersplash/usersplash.component';
import { RegistrationComponent } from './registration/registration.component';
import {LoginComponent} from './login/login.component';
import {SigninErrorComponent} from './signin-error/signin-error.component'

const routes: Routes = [
  { path: 'profile', component: UsersplashComponent },
  { path: 'register', component: RegistrationComponent },
  { path: '', component: LoginComponent},
  { path: 'whoops', component: SigninErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
