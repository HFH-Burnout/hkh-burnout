import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersplashComponent } from './usersplash/usersplash.component';


const routes: Routes = [
  { path: 'profile/:token', component: UsersplashComponent }
//{ path: 'profile', component: UsersplashComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
