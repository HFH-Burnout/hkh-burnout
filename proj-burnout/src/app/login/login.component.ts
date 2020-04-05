import { Component, OnInit } from '@angular/core';
import { HatClient } from "@dataswift/hat-js";
import { FormControl, FormGroup } from '@angular/forms';
import { HatService } from '../../services/hat.service';

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

  constructor(private hatService: HatService) {}

  ngOnInit(): void {
  }

  storeNewToken(newToken){
    console.log(newToken);
    localStorage.setItem('hatToken', newToken);
  }

  fetchLoginUrl() {
    var successURL = 'http://127.0.0.1:4200/register'
    var failURL = 'http://127.0.0.1:4200/whoops'
    var url=this.hatService.fetchHatLogin(`${this.profileForm.controls['firstName'].value}`, successURL, failURL);
    if (url) {
      window.location.href = `https://${url}`;
    }
  }
}
