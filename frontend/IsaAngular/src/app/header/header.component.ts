import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { AuthguardGuard} from '../authguard.guard';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
public user = null;
  public loggedIn = false;
  public username:string;
 constructor(private _userService: UserServiceService) { 
  
   
 }

  ngOnInit() {
    this._userService.getUser().subscribe(data => this.user = data);
  }
  
  isLoggedIn() {
    return this._userService.getLoggedIn();
  }
  
  getUsername(){
  return this._userService.getUsername();
  }
}
