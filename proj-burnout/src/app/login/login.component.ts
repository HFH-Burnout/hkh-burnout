import { Component, OnInit } from '@angular/core';
import { HatClient } from "@dataswift/hat-js";
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });
  appId = 'pb-1-dev';
  redirect = 'callback-url';
  fallback = 'fallback-url';

  constructor() {}

  ngOnInit(): void {}

  storeNewToken(newToken){
    console.log(newToken);
    localStorage.setItem('hatToken', newToken);
  }

  fetchHatLogin() {
    const config = {
      token: "",
      apiVersion: 'v2.6',
      secure: true,
      onTokenChange: (newToken) => this.storeNewToken(newToken)
    };
    console.log(this.profileForm);
    const hat = new HatClient(config);
    console.warn(this.profileForm.value);
    const hatDomain = `${this.profileForm.controls['firstName'].value}.hubat.net`;
    console.log(hatDomain, 'hatDomain');
    console.log(hat);
    const url = hat.auth().generateHatLoginUrl(hatDomain, this.appId, this.redirect, this.fallback);    
      console.log(url, 'url');
    if (url) {
      window.location.href = `https://${url}`;
    }   
  }

}
