import { Component, OnInit } from '@angular/core';
import { HatClient } from "@dataswift/hat-js";
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  firstName = new FormControl('')
  appId = 'pb-1-dev';
  redirect = 'http://127.0.0.1:4200/profile'; //these are testing values
  fallback = 'http://127.0.0.1:4200/whoops'; //please change them

  constructor(router: Router) {}

  ngOnInit(): void {}

  storeNewToken(newToken){
    localStorage.setItem('hatToken', newToken);
  }

  goToRegistrationPage(){
    window.location.href =  '/profile'
  }

  fetchLoginUrl() {
    var successURL = 'http://127.0.0.1:4200/register'
    var failURL = 'http://127.0.0.1:4200/whoops'
    var url = this.hatService.fetchHatLogin(`${this.firstName.value}`, successURL, failURL);
    if (url) {
      window.location.href = `https://${url}`;
    }
  }

}
