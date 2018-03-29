import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css']
})
export class UserpageComponent implements OnInit {
  constructor(private user: UserServiceService) {


  }
  get username():string {
      return this.user.username;
    }
    set username(value: string) {
      this.user.username = value;
    }
  ngOnInit() {

  }

}
