import { Component, OnInit } from '@angular/core';
import { jwt } from 'jsonwebtoken';
const queryString = window.location.search;
const urlParams= new URLSearchParams(queryString);


@Component({
  selector: 'app-usersplash',
  templateUrl: './usersplash.component.html',
  styleUrls: ['./usersplash.component.scss']
})
export class UsersplashComponent implements OnInit {
  token = urlParams.get('token');
  hubDomain = jwt.decode(this.token)
  constructor() {
  }

  ngOnInit(): void {
    console.log(queryString);
    console.log(this.hubDomain.body)
  }

}
