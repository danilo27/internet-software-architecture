import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['../login/login.component.css']
})
export class ChangePasswordComponent implements OnInit {

   constructor(
        private router:Router,
        private http: HttpClient,
        private route: ActivatedRoute
        ) { }

  ngOnInit() {
  }
  
 
  
  changePassword(e) {
      e.preventDefault();

	  var username = this.route.snapshot.params["username"];
      var password = e.target.elements[0].value;
      var password_repeat = e.target.elements[1].value;
      if(password == password_repeat){
	      var user = {
	          username: username,
	          password: password,
	          passwordRepeat: password_repeat
	      }
	      
	       this.http.post('/changePassword', user).subscribe(data => {
	       		if(data!=null){
	       			this.router.navigate(['login']);
	       		} else {
	       		  alert('Error! You can\'t use old password!');
	       		}
	       })
       } else {
       	alert('Passwords don\'t match!');
       }
  }
}
