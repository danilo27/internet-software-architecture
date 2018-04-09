import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css']
})
export class UserpageComponent implements OnInit {

  constructor(private user: UserServiceService,
  private http: HttpClient,
                private route: ActivatedRoute) {
        // this.friends = user.friends;

  }
  //my_friends_list: Array<Array<string>>;
   my_friends_list: any;
   friends_sorted: string;
  
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

    getUsername(){
      return this.user.getUsername();
      }
  ngOnInit() {
    console.log(this.user);
    console.log(this.user.friends);
    console.log(this.email);
    console.log(this.user.email);
    this.my_friends();
  }
  
  my_friends(){
  
    this.http.get('/find_my_friends/'+this.user.email).subscribe(data => {
      
      if(data != null){
        console.log('1 ',data);
        this.my_friends_list = data as any[];
        
       
      }
    })
  }
  
  sortByName(){
  
    this.http.get('/sortByName/'+this.user.email).subscribe(data => {
      
      if(data != null){
        console.log('sort by name ',data);
        this.my_friends_list = data as any[];
        
       
      }
    })
  }
  
  sortByLastname(){
  
    this.http.get('/sortByLastname/'+this.user.email).subscribe(data => {
      
      if(data != null){
        console.log('sort by lastname ',data);
        this.my_friends_list = data as any[];
        
       
      }
    })
  }
}
