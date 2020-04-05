import { Injectable } from '@angular/core';
import { HatClient } from "@dataswift/hat-js";

@Injectable({
  providedIn: 'root'
})
export class HatService {
  appId = 'pb-1-dev';
  namespace = 'project-burnout'
  redirect = 'http://127.0.0.1:4200/profile'; //these are testing values
  fallback = 'http://127.0.0.1:4200/whoops'; //please change them
  token = ""
  hat;
  config;
  constructor() {
    this.config = {
      token: this.token,
      apiVersion: 'v2.6',
      secure: true,
      onTokenChange: (newToken) => this.storeNewToken(newToken)
    };
    this.hat = new HatClient(this.config);
   }

  storeNewToken(newToken){
    console.log(newToken);
    localStorage.setItem('hatToken', newToken);
  }

  fetchHatLogin(username) {
    // console.log(this.profileForm);
    // console.warn(this.profileForm.value);
    const hatDomain = `${username}.hubat.net`;
    console.log(hatDomain, 'hatDomain');
    console.log(this.hat);
    const url = this.hat.auth().generateHatLoginUrl(hatDomain, this.appId, this.redirect, this.fallback);
    console.log(url, 'url');
    return url;
  }

  async sendDataToHat(endpoint, data){
    try {
      const result = await this.hat.hatData().create(
        this.namespace,
        endpoint,
        data
      );
    } catch (error) {
    }

  }
}
