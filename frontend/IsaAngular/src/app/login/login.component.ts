import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient} from "@angular/common/http";
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
      private router:Router,
      private http: HttpClient,
      private _userService: UserServiceService) { }

  ngOnInit() {
  }

  username: string;

  loginUser(e) {
      e.preventDefault();

      var username = e.target.elements[0].value;
      var password = e.target.elements[1].value;

      var user = {
          username: username,
          password: password
      }
      console.log(username,password);

      this.http.post('/login', user).subscribe(data => {
      if(data['username'] != ''){
        this._userService.setLoggedIn();
        this.router.navigate(['userpage']);
        this._userService.username = data['username'];
      }

    })



    return false;
  }

}
