import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css']
})
export class UserpageComponent implements OnInit {

  constructor(private user: UserServiceService) {
        // this.friends = user.friends;

  }
    get email():string {
      return this.user.email;
    }
    set email(value: string) {
      this.user.email = value;
    }

    get friends():Array<string> {
        return this.user.friends;
    }

    set friends(value: Array<string>){
        this.user.friends = value;
    }


  ngOnInit() {
    console.log(this.user);
    console.log(this.user.friends);
    console.log(this.email);
    console.log(this.user.email);
  }

}
