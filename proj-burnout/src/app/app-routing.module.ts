import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersplashComponent } from './usersplash/usersplash.component';
import {LoginComponent} from './login/login.component';
import {SigninErrorComponent} from './signin-error/signin-error.component'

const routes: Routes = [
  { path: 'profile', component: UsersplashComponent },
  { path: '', component: LoginComponent},
  { path: 'whoops', component: SigninErrorComponent}
//{ path: 'profile', component: UsersplashComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
