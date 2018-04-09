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
  what: string = 'reg';
  register(e) {
	  
      e.preventDefault();
      
      if(e.target.elements[0].value != ''
    	|| e.target.elements[1].value != ''	 
    	|| e.target.elements[2].value != ''
    	|| e.target.elements[3].value != ''
    	|| e.target.elements[4].value != ''
    	|| e.target.elements[5].value != ''
    	|| e.target.elements[6].value != ''
    	|| e.target.elements[7].value != ''
      ){
      
	      if(!isNaN(parseFloat(e.target.elements[7].value)) && isFinite(e.target.elements[7].value) ){
	      var email = e.target.elements[0].value;
	      var username = e.target.elements[1].value;
	      var password = e.target.elements[2].value;
	      var password_repeat = e.target.elements[3].value;
	      var name = e.target.elements[4].value;
	      var lname = e.target.elements[5].value;
	      var city = e.target.elements[6].value;
	      var phoneNumber = e.target.elements[7].value;
	
	
	      var user = {
	          email: email,
	          password: password,
	          password_repeat: password_repeat,
	          name: name,
	          lastname: lname,
	          city: city,
	          phoneNumber: phoneNumber,
	          username: username
	      }
	
	          this.http.post('/register', user).subscribe(data => {
	          console.log('data je: ',data);
	          if(data['poruka']=='ok'){
	        	  //this.router.navigate(['activation']);
	        	  this.what = 'link';
	          } else if (data['poruka']=='email'){
	        	  alert('Email adresa vec postoji');
	          }  else if (data['poruka']=='username'){
	        	  alert('Username vec postoji');
	          }  else if (data['poruka']=='lozinke'){
	        	  alert('Lozinke se ne poklapaju');
	          } else if (data['poruka']=='sve'){
	        	  alert('Sva polja su obavezna');
	          } else if (data['poruka']=='email_invalid'){
	        	  alert('Neispravan email');
	          }else if (data['poruka']=='username_invalid'){
	        	  alert('Nedozvoljeni karakteri u username-u');
	          }
	          
	      })
	
	
	  } else {
		  alert('Za telefon dozvoljene samo cifre');
	  }
      } else {
    	  alert('Sva polja su obavezna');
      }
   return false;
  }

}
