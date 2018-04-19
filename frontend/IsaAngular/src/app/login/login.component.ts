
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
   
      this.http.post('/login', user).subscribe(data => {
	      if(data != null){
		         console.log(data);
		         if(data['promenio']==false && data['utype'] == 'fanAdmin'){
		        	this.router.navigate(['change-password/'+data['username']]);
		        	alert('First time you log in you have to change your password!');
		         } else {
			        this._userService.setLoggedIn();
			        this._userService.email = data['email'];
			        this._userService.friends = data['friends'];
			        this._userService.name = data['name'];
			        this._userService.lastname = data['lastname'];
			        this._userService.city = data['city'];
			        this._userService.phoneNumber = data['phoneNumber'];
			        this._userService.username = data['username'];
			        this._userService.utype = data['type'];
			        this._userService.promenio = data['promenio'];
			        this._userService.setUser(data);
			        this.router.navigate(['userpage']);
		         }
	      } else {
	    	  alert('Wrong username or password');
	      }
    })
    return false;
  }
}