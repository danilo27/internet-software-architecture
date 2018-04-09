import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import {ActivatedRoute} from '@angular/router'
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['../register/register.component.css']
})
export class UserprofileComponent implements OnInit {

  public whose = "other";
  public current = "details";
  public ciji;
  found_friends: string[] = [];
  found_friends_list: Array<Array<string>>;
  pending_friends_requests: string[] = [];
  //my_friends_list: Array<Array<string>>;
  my_friends_list: any;
  anyObject: any;
  
  email: string;
  friends: string[] = [];
  name: string;
  lastname: string;
  phoneNumber: number;
  city: string;
  username: string;
  
  user_global = null;
   
    constructor(private user: UserServiceService,
                private http: HttpClient,
                private route: ActivatedRoute
    ) {
       console.log('usaer je : ', this.user)
    console.log('route je : ', route.snapshot.params["username"])
      this.ciji = route.snapshot.params["username"];
    

      if(this.user.username === this.route.snapshot.params.username)
      {
          this.whose = "mine";
      }
      else
      {
          this.whose = "other";
          
      }
      
      this.getDetailsByUsername()
     }

  ngOnInit() {
     
    this.route.params.subscribe(params => {
     // PARAMS CHANGED .. TO SOMETHING REALLY COOL HERE ..

     // for example extract the id..
     this.ciji = params['username']; // (+) converts string 'id' to a number
    
      if(this.user.username === this.route.snapshot.params.username)
      {
          this.whose = "mine";
      }
      else
      {
          this.whose = "other";
          
      }
      
      this.getDetailsByUsername()
    
   });
  }
  
  getDetailsByUsername(){
    
  this.http.get('/getDetailsByUsername/'+this.ciji).subscribe(data => {
      console.log('details: ', data);
      if(data != null){
        this.email = data['email'];
        this.friends = data['friends'];
        this.name = data['name'];
        this.lastname = data['lastname'];
        this.city = data['city'];
        this.phoneNumber = data['phoneNumber'];
        this.username = data['username'];
        
       
      }
    })
  }
  
  details(){
    this.current = 'details';
  }
  
  my_friends(){
  
    this.http.get('/find_my_friends/'+this.user.email).subscribe(data => {
      
      if(data != null){
        this.current = 'my_friends';
        console.log(data);
        this.my_friends_list = data as any[];
        
       
      }
    })
  }
  
  find_friends_div(){
  this.current = 'find_friends';
  }

  
  pending_friend_requests(){         
     this.http.get('/pending_friend_requests/'+this.user.email).subscribe(data => {
      if(data != null){
        this.pending_friends_requests = data as any[];
      }
    })
    this.current = 'pending_friend_requests';
  }
    
//  get email():string {
//    return this.user.email;
//  }
//  get city():string {
//    return this.user.city;
//  }
//  get name():string {
//    return this.user.name;
//  }
//  get lastname():string {
//    return this.user.lastname;
//  }
//  get phoneNumber():number {
//    return this.user.phoneNumber;
//  }

  public setStateMine(){
     this.whose = "mine";
  }

  public setStateOther(){
    this.whose = "other";
  }
  
  find_friends(e) {
      e.preventDefault();

      var name = e.target.elements[0].value;
      var lastname = e.target.elements[1].value;

       this.user_global = {
          name: name,
          lastname: lastname
      }
      
      this.findByUser(this.user_global);
      
    return false;
  }
  
  findByUser(user){
    console.log(this.user.email);
      this.http.post('/find_friends/'+this.user.email, user).subscribe(data => {

      if(data != null){
        console.log(data);
        this.found_friends_list = data as any[];
        console.log(this.found_friends_list);
       
      }
    })
     this.current = 'friends_results';
  }
  
  add_friend(event) {
     console.log(event.target.name);

      this.http.get('/add_friend/'+this.user.email+"/"+event.target.name).subscribe(data => {

      if(data != null){
        console.log(data);
        this.found_friends_list = data as any[];
        console.log(this.found_friends_list);

      }
      this.findByUser(this.user_global);
    })
    return false;
  }
  
  acceptFR(event) {
     console.log(event.target.name);

      this.http.get('/acceptFR/'+this.user.email+"/"+event.target.name).subscribe(data => {

      this.pending_friend_requests();
    })
    return false;
  }
  
   declineFR(event) {
     console.log(event.target.name);

      this.http.get('/declineFR/'+this.user.email+"/"+event.target.name).subscribe(data => {

        //this.my_friends();
      this.pending_friend_requests();
    })
    return false;
  }
  
  removeFriend(event) {
     console.log(event.target.name);

      this.http.get('/removeFriend/'+this.user.email+"/"+event.target.name).subscribe(data => {

     this.my_friends();
    })
    return false;
  }
  
  cancelFR(event) {
     console.log(event.target.name);

      this.http.get('/cancelFR/'+this.user.email+"/"+event.target.name).subscribe(data => {

     this.findByUser(this.user_global);
    })
    return false;
  }
}

