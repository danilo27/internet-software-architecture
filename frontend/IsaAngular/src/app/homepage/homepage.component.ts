import { Component, OnInit } from '@angular/core';

import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

 // public user = '{"name":"vlada"}';
   public user = null;

  constructor(private _userService: UserServiceService) { }

  ngOnInit() {
    this._userService.getUser().subscribe(data => this.user = data);
  }


  
  
  isLoggedIn() {
    return this._userService.getLoggedIn();
  }



}
