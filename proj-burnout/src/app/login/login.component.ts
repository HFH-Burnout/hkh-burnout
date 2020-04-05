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
    var url=this.hatService.fetchHatLogin(`${this.profileForm.controls['firstName'].value}`);
    if (url) {
      window.location.href = `https://${url}`;
    }
  }
}
