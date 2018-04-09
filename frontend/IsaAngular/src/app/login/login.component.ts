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

  ngOnInit() {}

  email: string;

  loginUser(e) {
      e.preventDefault();

      var email = e.target.elements[0].value;
      var password = e.target.elements[1].value;

      var user = {
          email: email,
          password: password
      }
      //console.log(email,password);

      this.http.post('/login', user).subscribe(data => {
      //if(data['email'] != ''){
      if(data != null){
        console.log(data);
        
        this._userService.setLoggedIn();
        this.router.navigate(['userpage']);
        this._userService.email = data['email'];
        this._userService.friends = data['friends'];
        this._userService.name = data['name'];
        this._userService.lastname = data['lastname'];
        this._userService.city = data['city'];
        this._userService.phoneNumber = data['phoneNumber'];
        this._userService.username = data['username'];
      }
    })
    return false;
  }
}
