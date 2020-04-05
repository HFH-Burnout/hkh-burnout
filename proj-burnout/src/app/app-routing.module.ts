import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersplashComponent } from './usersplash/usersplash.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  { path: 'profile', component: UsersplashComponent },
  { path: 'register', component: RegistrationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
