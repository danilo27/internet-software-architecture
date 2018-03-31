import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
@Component({
  selector: 'app-activation-page',
  templateUrl: './activation-page.component.html',
  styleUrls: ['./activation-page.component.css']
})
export class ActivationPageComponent implements OnInit {

    constructor(private user: UserServiceService) {


    }
    get email():string {
      return this.user.email;
    }
    set email(value: string) {
      this.user.email = value;
    }
  ngOnInit() {
  }

}
