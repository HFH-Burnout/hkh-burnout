import { Component, OnInit } from '@angular/core';
const queryString = window.location.search;
const urlParams= new URLSearchParams(queryString);


@Component({
  selector: 'app-usersplash',
  templateUrl: './usersplash.component.html',
  styleUrls: ['./usersplash.component.scss']
})
export class UsersplashComponent implements OnInit {
  token = urlParams.get('token');
  constructor() {
  }

  ngOnInit(): void {
    console.log(queryString);
  }

}
