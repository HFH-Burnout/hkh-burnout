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

  constructor() {}

  ngOnInit(): void {}

  storeNewToken(newToken){
    localStorage.setItem('hatToken', newToken);
  }

  fetchHatLogin() {
    const config = {
      token: "",
      apiVersion: 'v2.6',
      secure: true,
      onTokenChange: (newToken) => this.storeNewToken(newToken)
    };
    const hat = new HatClient(config);
    const hatDomain = `${this.firstName.value}.hubat.net`;;
    const url = hat.auth().generateHatLoginUrl(hatDomain, this.appId, this.redirect, this.fallback);
    if (url) {
      window.location.href = `https://${url}`;
    }
  }

}
