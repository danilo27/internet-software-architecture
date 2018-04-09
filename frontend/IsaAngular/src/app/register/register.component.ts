import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient} from "@angular/common/http";
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

    constructor(
        private router:Router,
        private http: HttpClient,
        private _userService: UserServiceService) { }

  ngOnInit() {}

  register(e) {
      e.preventDefault();
      if(!isNaN(parseFloat(e.target.elements[7].value)) && isFinite(e.target.elements[7].value) ){
      var email = e.target.elements[0].value;
      var username = e.target.elements[1].value;
      var password = e.target.elements[2].value;
      var password_repeat = e.target.elements[3].value;
      var name = e.target.elements[4].value;
      var lname = e.target.elements[5].value;
      var city = e.target.elements[6].value;
      var phoneNumber = e.target.elements[7].value;


      var new_user = {
          email: email,
          password: password,
          password_repeat: password_repeat,
          name: name,
          lastname: lname,
          city: city,
          phoneNumber: phoneNumber,
          username: username
      }

          this.http.post('/register', new_user).subscribe(data => {

            this.router.navigate(['activation']);

      })


  }
   return false;
  }

}
