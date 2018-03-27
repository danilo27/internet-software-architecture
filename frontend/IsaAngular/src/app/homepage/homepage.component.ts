import { Component, OnInit } from '@angular/core';

import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  public user = null;

  constructor(private _userService: UserServiceService) { }

  ngOnInit() {
    this.user = this._userService.getUser();
  }

  isLoggedIn() {
    if (this.user == null) {
      return false;
    } else {
      return true;
    }
  }

}
