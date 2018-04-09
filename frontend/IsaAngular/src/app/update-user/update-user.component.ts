import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient} from "@angular/common/http";
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['../register/register.component.css']
})
export class UpdateUserComponent implements OnInit {
    loggedInEmail  = this.user.email;

    constructor(
        private router:Router,
        private http: HttpClient,
        private user: UserServiceService) { }

  ngOnInit() {


  }
  // get email():string {
  //   return this.user.email;
  // }
  update(e) {
      e.preventDefault();

      console.log("email je:");
       console.log(this.loggedInEmail);

      if(window.confirm('Are sure you want to save changes ?')){
          alert('updating info')

          var email = e.target.elements[0].value;
          var password = e.target.elements[1].value;
          var password_repeat = e.target.elements[2].value;
          var name = e.target.elements[3].value;
          var lastname = e.target.elements[4].value;
          var city = e.target.elements[5].value;
//if(!isNaN(parseFloat(e.target.elements[6].value)) && isFinite(e.target.elements[6].value) ){
          var phoneNumber = e.target.elements[6].value;
//}


          var updated_user = {
              loggedInEmail: this.loggedInEmail,
              email: email,
              password: password,
              password_repeat: password_repeat,
              name: name,
              lastname: lastname,
              city: city,
              phoneNumber: phoneNumber
          }

              this.http.post('/updateUser', updated_user).subscribe(data => {
                this.user.email = data['email'];
                this.router.navigate(['userprofile']);

          })


          }
}

}
